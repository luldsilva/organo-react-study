import "./TextField.css";

const TextField = (props) => {

  const onChanging = (event) => {
    props.objectChanged(event.target.value);
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.value} onChange={onChanging} required={props.required} placeholder={props.placeholder} />
    </div>
  );
};

export default TextField;
