import Employee from "../Employee";
import "./teams.css";
import hexToRgba from "hex-to-rgba";

const Teams = (props) => {
  return (
    props.employees.length > 0 && (
      <section
        className="teams"
        style={{ backgroundColor: hexToRgba(props.team.color, '0.6') }}
      >
        <input
          onChange={(event) =>
            props.changeColor(event.target.value, props.team.id)
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
                employee={employee}
                onDeleting={props.onDeleting}
                onFavorite={props.onFavorite}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Teams;
