import { data } from "./data/data";
import { useState } from "react";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {
  const calcImc = (e, weight, height) => {
    e.preventDefault();

    if (!weight || !height) return;

    console.log(weight, height);
    const imcResult = weight / (height * height);
    setImc(imcResult);
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} />}
    </div>
  );
}

export default App;
