interface IUserProps {
  size?: number;
}

const IUser = ({ size = 16, ...props }: IUserProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 12C15.315 12 18 9.315 18 6C18 2.685 15.315 0 12 0C8.685 0 6 2.685 6 6C6 9.315 8.685 12 12 12ZM12 15C7.995 15 0 17.01 0 21V24H24V21C24 17.01 16.005 15 12 15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IUser;
