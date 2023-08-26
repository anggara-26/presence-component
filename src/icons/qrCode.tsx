interface IQRCodeProps {
  width?: number;
  color?: string;
}

const IQRCode = ({ width = 16, color, ...props }: IQRCodeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M9 5.4V9H5.4V5.4H9ZM10.8 3.6H3.6V10.8H10.8V3.6ZM9 15V18.6H5.4V15H9ZM10.8 13.2H3.6V20.4H10.8V13.2ZM18.6 5.4V9H15V5.4H18.6ZM20.4 3.6H13.2V10.8H20.4V3.6ZM13.2 13.2H15V15H13.2V13.2ZM15 15H16.8V16.8H15V15ZM16.8 13.2H18.6V15H16.8V13.2ZM13.2 16.8H15V18.6H13.2V16.8ZM15 18.6H16.8V20.4H15V18.6ZM16.8 16.8H18.6V18.6H16.8V16.8ZM18.6 15H20.4V16.8H18.6V15ZM18.6 18.6H20.4V20.4H18.6V18.6ZM24 6H21.6V2.4H18V0H24V6ZM24 24V18H21.6V21.6H18V24H24ZM0 24H6V21.6H2.4V18H0V24ZM0 0V6H2.4V2.4H6V0H0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IQRCode;
