import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#D9F7E9",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#E8F8FF",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#F8F8E2",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#FAE9F5",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#FFF5D9",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const employeeInitial = [
    {
      id: uuidv4(),
      favorite: false,
      name: "Lucas Silva",
      position: "Desenvolvedor de software",
      image: "https://github.com/luldsilva.png",
      team: teams[0].name,
    },
  ];

  const [employees, setEmployees] = useState(employeeInitial);

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const changeColorTeam = (color, id) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      })
    );
  };

  const teamsRegister = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  };

  const resolveFavorite = (id) => {
    setEmployees(employees.map(employee => {
      console.log("employee dentro de resolve:", employee);
      if(employee.id === id) employee.favorite = !employee.favorite;
      return employee;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teamsRegister={teamsRegister}
        teams={teams.map((team) => team.name)}
        onEmployeeRegister={(employee) =>
          setEmployees([...employees, employee])
        }
      />

      <section className="teams">
        <h1>Minha organização</h1>

        {teams.map((team) => (
          <Teams
            onFavorite={resolveFavorite}
            changeColor={changeColorTeam}
            key={team.name}
            team={team}
            employees={employees.filter(
              (employee) => employee.team === team.name
            )}
            onDeleting={deleteEmployee}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
