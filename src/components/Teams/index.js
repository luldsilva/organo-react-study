import Employee from "../Employee";
import "./teams.css";

const Teams = (props) => {
  return (
    props.employees.length > 0 && (
      <section
        className="teams"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="employees">
          {props.employees.map((employee) => (
            <Employee
              backgroundColor={props.primaryColor}
              key={employee.name}
              name={employee.name}
              position={employee.position}
              image={employee.image}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Teams;
