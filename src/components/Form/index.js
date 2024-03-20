import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onEmployeeRegister({
      name,
      position,
      image,
      team
    })
    setName('')
    setPosition('')
    setImage('')
    setTeam('')
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          objectChanged={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={position}
          objectChanged={(value) => setPosition(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          objectChanged={(value) => setImage(value)}
        />
        <DropdownList label="Time" itens={props.teams} value={team} objectChanged={value => setTeam(value)}/>
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
