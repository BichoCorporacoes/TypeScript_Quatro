import { useFieldArray, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

type CadastroDeps = {
  dependente: {
    nome: string;
    nomeSocial: string;
  }[];
};
export default class DependenteCadastro {
  formulario() {
    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      control,
    } = useForm<CadastroDeps>({});

    return (
      <Form className="Controll">
        <div className="controll">
          <h3>Cadastrar Dependente</h3>
          <div className="controll-label">
            <label>Nome</label>
            <InputText id="Nome" />
            <label>Nome Social</label>
            <InputText id="Nome Social" />
          </div>
          <Button variant="success">Registrar Dep.</Button>
        </div>
        <div className="controll-cadastrados">
          <h3>Dependentes Cadastrados até o momento...</h3>
          <h4>Murilo Fattore</h4>
          <span>
            adicionar{" "}
            <a rel="stylesheet" href="#">
              documentos | telefones{" "}
            </a>
          </span>
        </div>
      </Form>
    );
  }
}
