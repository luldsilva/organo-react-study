import Employee from "../Employee";
import "./teams.css";
import hexToRgba from "hex-to-rgba";

const Teams = (props) => {
  console.log(props);
  return (
    props.employees.length > 0 && (
      <section
        className="teams"
        style={{ backgroundColor: hexToRgba(props.team.color, '0.6') }}
      >
        <input
          onChange={(event) =>
            props.changeColor(event.target.value, props.name)
          }
          value={props.team.color} type="color" className="input-color"
        />
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="employees">
          {props.employees.map((employee) => {
            return (
              <Employee
                backgroundColor={props.team.color}
                key={employee.name}
                name={employee.name}
                position={employee.position}
                image={employee.image}
                onDeleting={props.onDeleting}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Teams;
