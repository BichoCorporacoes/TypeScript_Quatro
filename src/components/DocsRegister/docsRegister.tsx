import { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import { InputMask } from "primereact/inputmask";

export default class CadastroDocs {
  formulario() {
    const [date, setDate] = useState<Date | Date[] | undefined>(undefined);
    const [val, setVal] = useState();
    const [inputValue, setInputValue] = useState("");

    const resetInputField = () => {
      setInputValue("");
    };
    return (
      <Form>
        <h3>Selecione o tipo do Documento</h3>
        {["CPF", "RG", "Passaporte"].map((type) => {
          return (
            <>
              <Form.Check
                inline
                label={`${type}`}
                name="group1"
                type="radio"
                id={`inline-${type}-1`}
              />
            </>
          );
        })}{" "}
        <Form.Group>
          <InputMask
            mask="99999999999"
            placeholder="XXXXXXXXX"
            value={inputValue}
            required
          ></InputMask>
          <label htmlFor="icon">Data de Emissão</label>
          <Calendar
            id="icon"
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
          />
          <Button variant="success" onClick={resetInputField}>
            Adicione
          </Button>
        </Form.Group>
        <h3>Seus Documentos até agora...</h3>
        <h4>Por favor, cadastre algum documento</h4>
      </Form>
    );
  }
}
