import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Teams from "./components/Teams";

function App() {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F8F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06869',
      secondaryColor: '#FAE9F5',
    },
    {
      name: 'UX e Design',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];
  const [employees, setEmployees] = useState([]);
  const onNewEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = () => {
    console.log('deletando colaborador');
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onEmployeeRegister={(employee) => onNewEmployee(employee)} />
      {teams.map(team => 
        <Teams
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(e => e.team === team.name)}
          onDeleting={deleteEmployee}
        />
      )}
    </div>
  );
}

export default App;
