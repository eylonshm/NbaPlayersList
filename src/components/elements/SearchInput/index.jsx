import classNames from "classnames";
import { noop } from "../../../utils";

const searchInputId = "searchInput";

const SearchInput = ({
  placeholder,
  value,
  setValue = noop,
  className,
  label,
  ...props
}) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {label && (
        <label for={searchInputId} style={{ display: "none" }}>
          {label}
        </label>
      )}
      <input
        id={searchInputId}
        className={classNames("searchInput", className)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default SearchInput;
