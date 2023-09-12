import Icon, { iconTypesProps } from "../icon";

interface ButtonProps {
  /**
   * What type of button is this?
   */
  type?: "button" | "reset" | "submit";
  /**
   * What type of style you want to use?
   */
  buttonStyle?: "primary" | "secondary" | "tertiary";
  /**
   * Does user can take an action with this button?
   */
  disable?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What font color to use
   */
  color?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button label
   */
  label?: string;
  /**
   * Button icon
   */
  icon?: keyof typeof iconTypesProps;
  /**
   * Button children
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Additional Class?
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "button",
  buttonStyle = "secondary",
  disable = false,
  backgroundColor,
  color,
  size = "medium",
  label,
  icon,
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const mode = disable
    ? "presence-button--disabled"
    : `presence-button--${buttonStyle}`;
  return (
    <button
      type={type}
      disabled={disable}
      onClick={onClick}
      className={`${className ?? ""} ${backgroundColor ? "!bg-none" : ""} ${
        color ? `outline-inherit` : ""
      } presence-button--${size} ${mode}`}
      style={{
        backgroundColor,
        color,
      }}
      {...props}
    >
      {icon ? <Icon type={icon} size={size} /> : null}
      {label}
      {children}
    </button>
  );
};
