export const SearchIcon = ({ color = "#C4C4C4" }: { color?: string }) => {
	return (
		<svg
			className="absolute top-1/2 left-3 -translate-y-1/2"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_2102_683)">
				<path
					d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_2102_683">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const EditIcon = ({ color = "black" }: { color?: string }) => {
	return (
		<svg
			className="h-6 w-6 overflow-visible"
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.048 20.938H20.948C21.0806 20.938 21.2078 20.8853 21.3016 20.7915C21.3953 20.6978 21.448 20.5706 21.448 20.438C21.448 20.3054 21.3953 20.1782 21.3016 20.0844C21.2078 19.9907 21.0806 19.938 20.948 19.938H4.048C3.9154 19.938 3.78822 19.9907 3.69445 20.0844C3.60068 20.1782 3.548 20.3054 3.548 20.438C3.548 20.5706 3.60068 20.6978 3.69445 20.7915C3.78822 20.8853 3.9154 20.938 4.048 20.938ZM10.21 17.18C10.6322 17.0612 11.0175 16.8376 11.33 16.53L20.87 6.98999C21.1967 6.662 21.3801 6.21793 21.3801 5.75499C21.3801 5.29205 21.1967 4.84798 20.87 4.51999L19.93 3.58999C19.5971 3.2727 19.1549 3.0957 18.695 3.0957C18.2351 3.0957 17.7929 3.2727 17.46 3.58999L7.92 13.12C7.61237 13.4309 7.39169 13.8171 7.28 14.24L6.54 17C6.50521 17.1261 6.50447 17.2591 6.53784 17.3856C6.57122 17.5121 6.63752 17.6275 6.73 17.72C6.87172 17.8589 7.06159 17.9377 7.26 17.94L10.21 17.18ZM10.62 15.82C10.4356 16.0076 10.2042 16.1423 9.95 16.21L8.98 16.47L7.98 15.47L8.24 14.5C8.30905 14.2463 8.44354 14.0153 8.63 13.83L9.01 13.46L11 15.45L10.62 15.82ZM11.71 14.74L9.72 12.75L16.45 6.01999L18.44 8.00999L11.71 14.74ZM20.16 6.28999L19.15 7.29999L17.16 5.30999L18.17 4.28999C18.3106 4.14954 18.5013 4.07065 18.7 4.07065C18.8988 4.07065 19.0894 4.14954 19.23 4.28999L20.16 5.22999C20.2995 5.37113 20.3777 5.56156 20.3777 5.75999C20.3777 5.95842 20.2995 6.14885 20.16 6.28999Z"
				fill={color}
			></path>
		</svg>
	);
};

export const AttachmentIcon = ({ color = "#1D2D35" }: { color?: string }) => {
	return (
		<svg
			className="shrink-0 w-6 h-6 relative overflow-visible"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_6_618)">
				<path
					d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_6_618">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const FlagIcon = ({ color }: { color: string }) => {
	return (
		<svg
			className="h-6 w-6 overflow-visible"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_2102_102)">
				<path
					d="M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z"
					fill={color}
				></path>
			</g>
			<defs>
				<clipPath id="clip0_2102_102">
					<rect width="24" height="24" fill="white"></rect>
				</clipPath>
			</defs>
		</svg>
	);
};

export const ClockIcon = ({ color = "#1D2D35" }: { color?: string }) => {
	return (
		<svg
			className="h-6 w-6 overflow-visible"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z"
				fill={color}
			>
				{" "}
			</path>
		</svg>
	);
};
