import React, { useState } from "react";
import "./AllPhenomenons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const AllPhenomenons = ({ saveData, setSaveData }) => {
  console.log(saveData);

  const [hoverTest, setHoverTest] = useState("notdisplayed");

  // Test Hover
  const seeButton = (event) => {
    event.preventDefault();
    setHoverTest("displayed");
  };

  const hideButton = (event) => {
    event.preventDefault();
    setHoverTest("notdisplayed");
  };

  return (
    <div>
      <h3>Tous les Phénomènes</h3>
      {/* Afficher la liste des phénomènes */}
      {saveData.map((pheno, index) => {
        return (
          <div
            key={index}
            style={{ display: "flex" }}
            className="box-list"
            onMouseEnter={(event) => seeButton(event)}
            onMouseLeave={(event) => hideButton(event)}
          >
            <div>{pheno}</div>

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
              }}
            />
            <FontAwesomeIcon
              icon={faPlus}
              className={hoverTest}
              onClick={() => {
                alert("Open evolution");
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AllPhenomenons;
