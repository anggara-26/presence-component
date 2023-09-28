interface RadioButtonProps {
  /**
   * What is your radio button id?
   */
  id?: string;
  /**
   * What is your radio button section?
   */
  name?: string;
  /**
   * Checked?
   */
  checked?: boolean;
  /**
   * Radio button children
   */
  children?: React.ReactNode;
  /**
   * What you want to do when radio clicked?
   */
  onClick?: (e) => void;
  /**
   * Additional Class?
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const RadioButton = ({
  id,
  name,
  checked,
  children,
  onClick,
  className,
  ...props
}: RadioButtonProps) => {
  return (
    <div className="presence-radiobutton">
      <input
        id={id}
        type="radio"
        name={name}
        onClick={onClick}
        checked={checked}
        className={`${className} presence-radiobutton--input`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`${className} presence-radiobutton--label`}
      >
        {children}
      </label>
    </div>
  );
};
