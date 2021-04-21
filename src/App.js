import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import PhenomenonCard from "./Containers/PhenomenonCard";
import PhenomenesContext from "./Components/MyContexts";
import { PhenomenesProvider } from "./Components/MyContexts";
import "./App.css";

const App = () => {
  const { phenomenes, setPhenomenes } = useContext(PhenomenesContext);
  console.log(phenomenes);

  const [data, setData] = useState([]);

  // Get all data from database

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/all-phenomenons");
      // console.log(response);
      setData(response.data.phenomenons);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PhenomenesProvider value={{ phenomenes: data, setPhenomenes: setData }}>
      <div className="App">
        <h1>Phénomènes indésirables</h1>
        <PhenomenonCard />
      </div>
    </PhenomenesProvider>
  );
};

export default App;
