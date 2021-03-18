import React, { useState } from "react";

const Evolution = (props) => {
  console.log(props);

  const [appartionDate, setAppartionDate] = useState("");
  const [unchangedDate, setUnchangedDate] = useState("");
  const [aggravationDate, setAggravationDate] = useState("");
  const [disappearedDate, setDisappearedDate] = useState("");
  const [evolutions, setEvolutions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      appartionDate !== "" ||
      unchangedDate !== "" ||
      aggravationDate !== "" ||
      disappearedDate !== ""
    ) {
      if (evolutions.length === 0) {
        const newEvolution = [...evolutions];
        newEvolution.push({
          apparition: appartionDate,
          unchanged: unchangedDate,
          aggravation: aggravationDate,
          disappearance: disappearedDate,
        });
        setEvolutions(newEvolution);
        console.log(newEvolution);
      }
    } else {
      alert("Une erreur est survenue");
    }
  };

  return (
    <div
      style={{
        border: "green solid",
        width: 700,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
      }}
    >
      <h3>Evolution</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
        {/* 1er bloc */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Apparition</span>
            <input
              type="date"
              value={appartionDate}
              onChange={(event) => {
                console.log("Date selectionnée");
                setAppartionDate(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Inchangé</span>
            <input
              type="date"
              value={unchangedDate}
              onChange={(event) => {
                setUnchangedDate(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Title 1</span>
            <input type="textarea" />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Title 2</span>
            <input type="textarea" />
          </div>
        </div>

        {/* 2ème bloc */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Aggravation</span>
            <input
              type="date"
              value={aggravationDate}
              onChange={(event) => {
                setAggravationDate(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Disparition</span>
            <input
              type="date"
              value={disappearedDate}
              onChange={(event) => {
                setDisappearedDate(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Title 1</span>
            <input type="textarea" />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Title 2</span>
            <input type="textarea" />
          </div>
        </div>
        <input type="submit" value="Sauvegarder" />
      </form>
      <button
        onClick={() => {
          alert("Supprimer?");
        }}
      >
        Supprimer
      </button>
    </div>
  );
};

export default Evolution;
