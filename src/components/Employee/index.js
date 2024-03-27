import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./employee.css";

const Employee = ({ employee, backgroundColor, onDeleting, onFavorite }) => {
  const favorite = () => {
    onFavorite(employee.id);
  };

  const propsFavorite = {
    size: 25,
    onClick: favorite
  }
  return (
    <div className="employee">
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => onDeleting(employee.id)}
      />
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={employee.image} alt={employee.name} />
      </div>
      <div className="foot">
        <h4>{employee.name}</h4>
        <h5>{employee.position}</h5>
        <div className="favorite">
          {employee.favorite ? (
            <AiFillHeart {...propsFavorite} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Employee;
