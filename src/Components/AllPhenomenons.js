import React, { useState, useEffect } from "react";
import axios from "axios";
import Phenomenons from "./Phenomenons";
import PainBar from "./PainBar";
import { set } from "date-fns";

const AllPhenomenons = () => {
  const phenomenons = [
    "...",
    "Douleur",
    "Courbatures",
    "Asthénie",
    "Vertiges",
    "Paresthésie",
    "Céphalée",
    "Autre",
  ];

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

  const majorated = ["...", "oui", "non"];

  const mobilities = ["...", "oui", "non"];

  const checkUp = ["...", "Absent", "Bénin"];

  const [data, setData] = useState({});
  const [form, setForm] = useState({});
  const [pain, setPain] = useState(2);

  // Get all data from database

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/all-phenomenons");

      setData(response.data.phenomenons);
    } catch (error) {
      alert({ error: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Phénomènes à save

  const phenoToSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/add-phenomenon",
        data
      );

      setData(response.data.resultat);
    } catch (error) {
      alert({ error: error.message });
    }
  };

  const onChangePain = (event) => {
    setPain(event.target.value);
  };

  // Modification du phénomène TEST switch

  const handleChange = (event, type) => {
    switch (type) {
      case "pheno":
        setData({ ...data, pheno: event.target.value });
        break;
      case "territoire":
        setData({ ...data, territoire: event.target.value });
        break;
      case "majore":
        setData({ ...data, majore: event.target.value });
        break;
      case "date":
        setData({ ...data, date: event.target.value });
        break;
      case "douleur":
        setData({ ...data, douleur: event.target.value });
        break;
      case "mobility":
        setData({ ...data, mobility: event.target.value });
        break;
      case "checkUp":
        setData({ ...data, checkUp: event.target.value });
        break;
      case "precision":
        setData({ ...data, precision: event.target.value });
        break;
      default:
        console.log("Type non trouvé");
        break;
    }
  };

  // Validation du phénomène

  const handleSubmit = (e) => {
    e.preventDefault();

    phenoToSave();
    setData({
      pheno: "",
      territoire: "",
      majore: "",
      date: "",
      douleur: 1,
      mobility: "",
      checkUp: "",
      precision: "",
    });
  };

  return (
    <div>
      <form style={{ marginBottom: 20 }} onSubmit={handleSubmit}>
        <div>Nom du phénomène :</div>
        <select value={data.pheno} onChange={(e) => handleChange(e, "pheno")}>
          {phenomenons.map((pheno, index) => (
            <option key={index} value={pheno}>
              {pheno}
            </option>
          ))}
        </select>

        <div>Territoire :</div>
        <select
          value={data.territoire}
          onChange={(e) => handleChange(e, "territoire")}
        >
          {territoires.map((territoire, index) => (
            <option key={index} value={territoire}>
              {territoire}
            </option>
          ))}
        </select>

        <div>Majoré par le mouvement :</div>
        <select value={data.majore} onChange={(e) => handleChange(e, "majore")}>
          {majorated.map((major, index) => (
            <option key={index} value={major}>
              {major}
            </option>
          ))}
        </select>

        <div>
          <div>Date :</div>
          <input
            type="date"
            value={data.date}
            onChange={(e) => handleChange(e, "date")}
          />
        </div>

        <div>
          <PainBar pain={pain} setPain={setPain} handleChange={handleChange} />
        </div>

        <div>Mobilité globale restreinte :</div>
        <select
          value={data.mobility}
          onChange={(e) => handleChange(e, "mobility")}
        >
          {mobilities.map((mobility, index) => (
            <option key={index} value={mobility}>
              {mobility}
            </option>
          ))}
        </select>

        <div>Bilan Médical :</div>
        <select
          value={data.checkUp}
          onChange={(e) => handleChange(e, "checkUp")}
        >
          {checkUp.map((check, index) => (
            <option key={index} value={check}>
              {check}
            </option>
          ))}
        </select>

        <div>
          <div>Précision :</div>
          <textarea
            value={data.precision}
            placeholder="Votre texte ici..."
            onChange={(e) => handleChange(e, "precision")}
          />
        </div>

        <input
          type="submit"
          value="Ajouter"
          style={{
            backgroundColor: "#0069d9",
            color: "white",
            cursor: "pointer",
            borderRadius: 5,
            border: "none",
            padding: 8,
          }}
        />
      </form>

      <Phenomenons data={data} setData={setData} />
    </div>
  );
};

export default AllPhenomenons;
