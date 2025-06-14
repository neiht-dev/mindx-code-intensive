import { useState, useEffect } from "react";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import { users, taskStatus, flags, tasks } from "../data/mock";
import dayjs from "dayjs";

interface ModalAntdProps {
    isOpen: boolean;
    taskId?: number;
    onClose: () => void;
    onSave: (data: {
        id: number;
        title: string;
        description: string;
        endDate: Date;
        assign: number;
        status: number;
        flag: number;
    }) => void;
}

const ModalAntd = ({ isOpen, taskId = -1, onClose, onSave }: ModalAntdProps) => {
    const id = taskId;
    const [form] = Form.useForm();
    const [flag, setFlag] = useState(1);

    // Sync form fields with task data
    useEffect(() => {
        const currentTask = tasks.find((task) => task.taskId === taskId);
        if (currentTask) {
            form.setFieldsValue({
                title: currentTask.title,
                description: currentTask.description,
                endDate: dayjs(currentTask.deadline),
                assign: currentTask.assignedTo,
                status: currentTask.statusId,
            });
            setFlag(currentTask.flagId);
        } else {
            form.resetFields();
            setFlag(1);
        }
    }, [taskId, isOpen, form]);

    const handleSave = () => {
        form
            .validateFields()
            .then((values) => {
                onSave({
                    id,
                    title: values.title,
                    description: values.description,
                    endDate: values.endDate ? values.endDate.toDate() : new Date(),
                    assign: values.assign,
                    status: values.status,
                    flag,
                });
                onClose();
                form.resetFields();
            })
            .catch(() => { });
    };

    if (!isOpen) return null;

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Button
                        type="text"
                        style={{ padding: 0, width: 32, height: 32, borderRadius: 8, border: "1px solid #eee", marginRight: 8 }}
                        onClick={() => {
                            const maxFlagId = Math.max(...flags.map((f) => f.flagId));
                            setFlag(flag === maxFlagId ? 1 : flag + 1);
                        }}
                        tabIndex={-1}
                    >
                        {/* You can replace this with your FlagIcon component if needed */}
                        <span style={{ fontSize: 20, color: flags.find((f) => f.flagId === flag)?.color || flags[1].color }}>🏁</span>
                    </Button>
                    Create a new Task
                </div>
            }
            footer={null}
            closeIcon={<span style={{ fontSize: 20, color: '#aaa' }}>×</span>}
            centered
            width={600}
            transitionName="custom-fade"
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSave}
                initialValues={{
                    title: "",
                    description: "",
                    endDate: dayjs(),
                    assign: users[0]?.userId,
                    status: taskStatus[0]?.statusId,
                }}
            >
                <div style={{ display: "flex", gap: 16 }}>
                    <Form.Item
                        label={
                            <span>
                                Title <span style={{ color: "#f00" }}>*</span>
                            </span>
                        }
                        name="title"
                        rules={[{ required: true, message: "Title is required" }]}
                        style={{ flex: 1 }}
                    >
                        <Input placeholder="Type title of task" />
                    </Form.Item>
                    <Form.Item label="End Date" name="endDate" style={{ flex: 1 }}>
                        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
                    </Form.Item>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                    <Form.Item label="Description" name="description" style={{ flex: 1 }}>
                        <Input.TextArea placeholder="Type description..." autoSize={{ minRows: 2, maxRows: 4 }} />
                    </Form.Item>
                    <Form.Item label="Assign" name="assign" style={{ flex: 1 }}>
                        <Select
                            options={users.map((user) => ({ label: user.name, value: user.userId }))}
                            placeholder="Select user"
                        />
                    </Form.Item>
                </div>
                <Form.Item label="Status" name="status">
                    <Select
                        options={taskStatus.map((status) => ({ label: status.name, value: status.statusId }))}
                        placeholder="Choose status"
                    />
                </Form.Item>
                <div style={{ display: "flex", gap: 12, paddingTop: 16 }}>
                    <Button onClick={onClose} style={{ flex: 1 }}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" style={{ flex: 1, background: "#a259ff" }}>
                        Save
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default ModalAntd;