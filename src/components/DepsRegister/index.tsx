import { useFieldArray, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "react-bootstrap";
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
    } = useForm<CadastroDeps>({
      defaultValues: {
        dependente: [{ nome: "", nomeSocial: "" }],
      },
    });
    const { fields, append, remove } = useFieldArray({
      name: "dependente",
      control,
      rules: {
        required: "Por favor, adicionar 1 ou vários produtos",
      },
    });

    return (
      <>
        {fields.map((item, index) => {
          return (
            <>
              <label>Nome</label>
              <InputText id="Nome" />
              <label>Nome Social</label>
              <InputText id="Nome Social" />
              <Button variant="warning" onClick={() => remove(index)}>
                Remove Dependente
              </Button>
            </>
          );
        })}
        <Button
          variant="warning"
          onClick={() => {
            append({
              nome: "",
              nomeSocial: "",
            });
          }}
        >
          Add More
        </Button>
      </>
    );
  }
}
