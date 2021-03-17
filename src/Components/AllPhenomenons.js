import React, { useState } from "react";
import Evolution from "./Evolution";
import "./AllPhenomenons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const AllPhenomenons = ({ saveData, setSaveData }) => {
  console.log(saveData);

  const [hoverTest, setHoverTest] = useState("notdisplayed");
  const [showDetails, setShowDetails] = useState(false);

  // Test Hover
  const seeButton = (event) => {
    event.preventDefault();
    setHoverTest("displayed");
  };

  const hideButton = (event) => {
    event.preventDefault();
    setHoverTest("notdisplayed");
  };

  // Test visibilité
  const visibility = showDetails ? "visible" : "hidden";

  return (
    <div
      style={{
        display: "flex",
        border: "solid pink",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          border: "green solid",
          width: 500,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <h3>Tous les Phénomènes</h3>
        {/* Afficher la liste des phénomènes */}
        {saveData.map((pheno, index) => {
          console.log(pheno);
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 20,
                marginBottom: 10,
              }}
              className="box-list"
              // Au survol, affichage des buttons ou non
              onMouseEnter={(event) => seeButton(event)}
              onMouseLeave={(event) => hideButton(event)}
            >
              <div>{pheno}</div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: 50,
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className={hoverTest}
                  onClick={() => {
                    alert(`Delete ${pheno} ?`);
                    // Pour supprimer un phénomène
                    // Copie saveData
                    const newData = [...saveData];

                    // Suppression d'un élément selon son index
                    newData.splice(index, 1);
                    // Rafraichissement de l'état avec newData
                    setSaveData(newData);
                    setShowDetails(!showDetails);
                  }}
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  className={hoverTest}
                  onClick={() => {
                    alert("Open evolution");
                    // Pour afficher l'évolution d'un phénomène
                    // Copie saveData
                    const newData = [...saveData];
                    // console.log(newData[index]);
                    //
                    setSaveData(newData[index]);

                    setShowDetails(!showDetails);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ visibility }}>
        <Evolution />
        <button
          onClick={() => {
            alert("Fermer évolution");
            setShowDetails(!showDetails);
          }}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default AllPhenomenons;
