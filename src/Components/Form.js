import React, { useState, useEffect } from "react";
import axios from "axios";
import AllPhenomenons from "./AllPhenomenons";

const Form = () => {
  const phenomenons = [
    "...",
    "Douleur",
    "Coubatures",
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

  const [data, setData] = useState();
  const [form, setForm] = useState({ pheno: "", territoire: "" });
  const [list, setList] = useState([]);

  // Get all data from database

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/all-forms");

      setData(response.data.form);
      console.log(response.data);
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
      const response = await axios.post("http://localhost:3000/add-form", form);

      console.log("phenoToSave", response);
    } catch (error) {
      alert({ error: error.message });
    }
  };

  // Modification du form
  const handleChange = (e, type) => {
    if (type === "pheno") {
      setForm({ ...form, pheno: e.target.value });
    } else {
      setForm({ ...form, territoire: e.target.value });
    }
  };

  // Validation du form

  const handleSubmit = (e) => {
    e.preventDefault();

    phenoToSave();

    setList([...list, form]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Nom du phénomène :</div>
        <select value={form.pheno} onChange={(e) => handleChange(e, "pheno")}>
          {phenomenons.map((pheno, index) => (
            <option key={index} value={pheno}>
              {pheno}
            </option>
          ))}
        </select>

        <div>Territoire :</div>
        <select
          value={form.territoire}
          onChange={(e) => handleChange(e, "territoire")}
        >
          {territoires.map((territoire, index) => (
            <option key={index} value={territoire}>
              {territoire}
            </option>
          ))}
        </select>
        <input type="submit" value="Enregistrer" />
      </form>

      <AllPhenomenons saveData={list} setSaveData={setList} />
    </div>
  );
};

export default Form;
