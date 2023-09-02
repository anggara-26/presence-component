import { ICross, ISearch } from "src/icons";

interface SearchBarProps {
  /**
   * What text you want to show when form empty?
   */
  value?: string;
  /**
   * What text you want to show when form empty?
   */
  placeholder?: string;
  /**
   * What you want to do when form submitted?
   */
  onSubmit?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SearchBar = ({
  value,
  placeholder,
  onSubmit,
  ...props
}: SearchBarProps) => {
  return (
    <form onSubmit={onSubmit} className="presence-searchbar">
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        required
        className="peer presence-searchbar--input"
        {...props}
      />
      {value}
      <button
        type="button"
        className="block peer-valid:hidden presence-searchbar--search"
      >
        <ISearch />
      </button>
      <button
        type="reset"
        className="hidden peer-valid:block presence-searchbar--clear"
      >
        <ICross />
      </button>
    </form>
  );
};
