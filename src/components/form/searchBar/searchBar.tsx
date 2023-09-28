import { useState } from "react";
import Icon from "../../icon";

interface SearchBarProps {
  /**
   * What is the default value of this input?
   */
  defaultValue?: string;
  /**
   * What is your input value?
   */
  value?: string;
  /**
   * What text you want to show when form empty?
   */
  placeholder?: string;
  /**
   * What you want to do when form submitted?
   */
  onSubmit?: (e) => void;
}

/**
 * Primary UI component for user interaction
 */
export const SearchBar = ({
  defaultValue,
  value,
  placeholder,
  onSubmit,
  ...props
}: SearchBarProps) => {
  const [val, setVal] = useState(value);
  return (
    <form
      onSubmit={onSubmit}
      onReset={() => setVal("")}
      className="presence-searchbar"
    >
      <input
        type="search"
        defaultValue={defaultValue}
        value={val}
        placeholder={placeholder}
        onChange={({ target }) => setVal(target.value)}
        required
        className="peer presence-searchbar--input"
        {...props}
      />
      <button
        type="button"
        className="block peer-valid:hidden presence-searchbar--search"
      >
        <Icon type="search" size="small" />
      </button>
      <button
        type="reset"
        className="hidden peer-valid:block presence-searchbar--clear"
      >
        <Icon type="cross" size="small" />
      </button>
    </form>
  );
};
