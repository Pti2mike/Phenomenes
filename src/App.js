import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import ContentCard from "./Containers/ContentCard";
import PhenomenesContext from "./Components/MyContexts";
import { PhenomenesProvider } from "./Components/MyContexts";
import "./App.css";

const App = () => {
  const {
    phenomenes,
    setPhenomenes,
    phenomeneSelected,
    setPhenomeneSelected,
    evolutionSelected,
    setEvolutionSelected,
  } = useContext(PhenomenesContext);

  const [data, setData] = useState([]);
  const [phenoSelected, setPhenoSelected] = useState({});
  const [evolSelected, setEvolSelected] = useState({});

  // Get all data from database

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/all-phenomenons");
      setData(response.data.phenomenons);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PhenomenesProvider
      value={{
        phenomenes: data,
        setPhenomenes: setData,
        phenomeneSelected: phenoSelected,
        setPhenomeneSelected: setPhenoSelected,
        evolutionSelected: evolSelected,
        setEvolutionSelected: setEvolSelected,
      }}
    >
      <div className="App">
        <h1>Phénomènes indésirables</h1>
        <ContentCard />
      </div>
    </PhenomenesProvider>
  );
};

export default App;
