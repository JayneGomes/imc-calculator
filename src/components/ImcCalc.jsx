import Button from "./Button";
import "./ImcCalc.css";

const imcCalc = () => {
  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="weight">Peso(kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Exemplo: 70"
            />
          </div>
          <div className="form-control">
            <label htmlFor="height">Altura(m)</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Exemplo: 1,75"
            />
          </div>
        </div>
      </form>
      <div className="action-control">
        <Button id="calc-btn" text="Calcular" />
        <Button id="clear-btn" text="Limpar" />
      </div>
    </div>
  );
};

export default imcCalc;
