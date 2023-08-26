interface ButtonProps {
  /**
   * What type of button is this?
   */
  type?: "button" | "reset" | "submit";
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
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
  icon?: React.ReactNode;
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
  primary = false,
  disable = false,
  backgroundColor,
  color,
  size = "medium",
  label,
  icon,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const mode =
    (disable && "presence-fabbutton--disabled") ||
    (primary && "presence-fabbutton--primary") ||
    "presence-fabbutton--secondary";
  return (
    <button
      type={type}
      disabled={disable}
      onClick={onClick}
      className={`${className} presence-fabbutton--${size} ${mode}`}
      style={{
        backgroundColor: `${backgroundColor} !important`,
        color,
        border: primary && !label && "1px solid #a6a6a6",
        width: label && "fit-content",
      }}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};
