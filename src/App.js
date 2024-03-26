import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Teams from "./components/Teams";

function App() {
  const [teams, setTeams] = useState ([
    {
      name: 'Programação',
      color: '#D9F7E9',
    },
    {
      name: 'Front-End',
      color: '#E8F8FF',
    },
    {
      name: 'Data Science',
      color: '#F8F8E2',
    },
    {
      name: 'Devops',
      color: '#FAE9F5',
    },
    {
      name: 'UX e Design',
      color: '#FFF5D9',
    },
    {
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);
  const [employees, setEmployees] = useState([]);
  const onNewEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = () => {
    console.log('deletando colaborador');
  };

  const changeColorTeam = (color, nameTeam) => {
    setTeams(teams.map(team => {
      if(team.name === nameTeam){
        team.color = color;
      }
      return team;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onEmployeeRegister={(employee) => onNewEmployee(employee)} />
      {teams.map(team => 
        <Teams
          changeColor={changeColorTeam}
          key={team.name}
          name={team.name}
          team={team}
          employees={employees.filter(e => e.team === team.name)}
          onDeleting={deleteEmployee}
        />
      )}
    </div>
  );
}

export default App;
