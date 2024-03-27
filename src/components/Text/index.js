import "./Text.css";

const Text = ({
  type = "text",
  label,
  placeholder,
  value,
  objectChanged,
  required = false,
}) => {
  // const onChanging = (event) => {
  //   props.objectChanged(event.target.value);
  // }

  return (
    <div className={`text text-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => objectChanged(event.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Text;
