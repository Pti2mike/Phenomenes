import React, { useState } from "react";
import AllPhenomenons from "./AllPhenomenons";
import "./Territoires.css";

const Territoires = ({ phenomenon, setPhenomenon }) => {
  // console.log(phenomenon, territoire);

  const territoires = [
    "...",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "S1",
    "S2",
    "S3",
    "S4",
    "K1",
    "K2",
    "K3",
    "K4",
    "K5",
    "K6",
    "K7",
    "K8",
    "K9",
    "K10",
    "K11",
    "K12",
    "Tête",
    "Crane",
    "Face",
    "Cou",
    "Epaule",
    "Bras",
    "Coude",
    "Avant-bras",
    "Poignet",
    "Main",
    "Thorax",
    "Abdomen",
    "Epigastre",
    "Hypochondre",
    "Flanc",
    "Région péri ombilicale",
    "Fosse iliaque",
    "Hypogastre",
    "Lombes",
    "Fesse",
    "Coccyx",
    "Périnée",
    "Région génitale",
    "Région annale",
    "Hanche",
    "Cuisse",
    "Genou",
    "Jambe",
    "Cheville",
    "Pied",
  ];

  const [territoire, setTerritoire] = useState();
  const [saveData, setSaveData] = useState([]);

  console.log(phenomenon);

  const handleChange = (event) => {
    console.log("Territoire Selected");
    setTerritoire(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Data saved ${phenomenon} ${territoire}`);
    event.preventDefault();
    let newData = [...saveData];
    // newData.push(territoire); ==> "C2"
    newData.push([phenomenon, territoire]); // ==> CourbaturesC2 (mauvais rendu)
    setSaveData(newData);
  };

  console.log(saveData);

  return (
    <div>
      <div className="box">
        {/* <h3>Territoires</h3> */}
        <form onSubmit={handleSubmit}>
          <div>
            <div>Territoire :</div>
            <select value={territoire} onChange={handleChange}>
              {territoires.map((territoire, index) => (
                <option key={index} value={territoire}>
                  {territoire}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" value="Enregistrer" />
        </form>
      </div>

      <AllPhenomenons saveData={saveData} setSaveData={setSaveData} />
    </div>
  );
};

export default Territoires;
