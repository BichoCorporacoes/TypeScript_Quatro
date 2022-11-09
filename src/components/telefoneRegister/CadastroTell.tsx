import { InputMask } from "primereact/inputmask";
import { Button, Form } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";

type CadastroTelefones = {
  telefone: {
    numero: string;
    ddd: string;
  }[];
};

export default class CadastroTelefone {
  formulario() {
    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      control,
    } = useForm<CadastroTelefones>({
      defaultValues: {
        telefone: [{ numero: "", ddd: "" }],
      },
    });

    const { fields, append, remove } = useFieldArray({
      name: "telefone",
      control,
      rules: {
        required: "Por favor, adicionar 1 ou vários produtos",
      },
    });
    return (
      <Form className="tell-controll">
        <h3>Cadastro de telefones</h3>
        <div className="controll">
          {fields.map((item, index) => {
            return (
              <>
                <label htmlFor="basic">Digite o Numero do telefone</label>
                <InputMask
                  id="CPF"
                  mask="(99)999999999"
                  placeholder="(XX)XXXXXXXXX"
                  required
                  className="input-mask"
                ></InputMask>
                <Button
                  className="btn-remove"
                  variant="warning"
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              </>
            );
          })}
          <Button
            variant="warning"
            onClick={() => {
              append({
                numero: "",
                ddd: "",
              });
            }}
            className="btn-append"
          >
            Add More
          </Button>
        </div>
      </Form>
    );
  }
}
