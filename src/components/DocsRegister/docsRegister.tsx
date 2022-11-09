import { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import { InputMask } from "primereact/inputmask";

export default class CadastroDocs {
  formulario() {
    const [date, setDate] = useState<Date | Date[] | undefined>(undefined);
    const [inputValue, setInputValue] = useState("");

    const resetInputField = () => {
      setInputValue("");
    };
    return (
      <Form className="controll-documentos">
        <h3>Selecione o tipo do Documento</h3>
        <div className="controll">
          {["CPF", "RG", "Passaporte"].map((type) => {
            return (
              <div className="form-Controll">
                <Form.Check
                  inline
                  className="check-doc"
                  label={`${type}`}
                  name="group1"
                  type="radio"
                  id={`inline-${type}-1`}
                />
              </div>
            );
          })}{" "}
        </div>
        <Form.Group className="controll-info">
          <div className="label-numbers">
            <label htmlFor="label">Nº Doc</label>
            <InputMask
              mask="99999999999"
              placeholder="XXXXXXXXX"
              value={inputValue}
              required
            ></InputMask>
          </div>
          <div className="label-data">
            <label htmlFor="icon">Data de Emissão</label>
            <Calendar
              id="icon"
              value={date}
              onChange={(e) => setDate(e.value)}
              showIcon
            />
          </div>
        </Form.Group>
        <div className="label-btn">
          <Button variant="success" onClick={resetInputField}>
            Adicione
          </Button>
        </div>
        <h3>Seus Documentos até agora...</h3>
        <h4>Por favor, cadastre algum documento</h4>
      </Form>
    );
  }
}
