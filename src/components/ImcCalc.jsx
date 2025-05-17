import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };

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
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="height">Altura(m)</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Exemplo: 1,75"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="action-control">
        <Button
          id="calc-btn"
          text="Calcular"
          action={(e) => calcImc(e, weight, height)}
        />
        <Button id="clear-btn" text="Limpar" action={clearForm} />
      </div>
    </div>
  );
};

export default ImcCalc;
