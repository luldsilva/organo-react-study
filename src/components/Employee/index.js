import { AiFillCloseCircle } from "react-icons/ai";
import "./employee.css";

const Employee = ({ employee, backgroundColor, onDeleting }) => {
  return (
    <div className="employee">
      <AiFillCloseCircle size={25} className="delete" onClick={() => onDeleting(employee.id)} />
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={employee.image} alt={employee.name} />
      </div>
      <div className="foot">
        <h4>{employee.name}</h4>
        <h5>{employee.position}</h5>
      </div>
    </div>
  );
};

export default Employee;
