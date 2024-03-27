import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import Text from "../Text";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onEmployeeRegister({
      name,
      position,
      image,
      team,
    });
    setName("");
    setPosition("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Text
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          objectChanged={(value) => setName(value)}
        />
        <Text
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={position}
          objectChanged={(value) => setPosition(value)}
        />
        <Text
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          objectChanged={(value) => setImage(value)}
        />
        <DropdownList
          label="Time"
          itens={props.teams}
          value={team}
          objectChanged={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
      <form onSubmit={(event) => {
        event.preventDefault()
        props.teamsRegister({name: teamName, color: teamColor})
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Text
          required={true}
          label="Nome"
          placeholder="Digite o nome do time"
          value={teamName}
          objectChanged={(value) => setTeamName(value)}
        />
        <Text
          required={true}
          type='color'
          label="Cargo"
          placeholder="Digite a cor"
          value={teamColor}
          objectChanged={(value) => setTeamColor(value)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
