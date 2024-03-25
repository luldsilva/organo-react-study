import { AiFillCloseCircle } from "react-icons/ai";
import "./employee.css";

const Employee = ({ image, name, position, backgroundColor, onDeleting }) => {
  return (
    <div className="employee">
      <AiFillCloseCircle size={25} className="delete" onClick={onDeleting} />
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="foot">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Employee;
