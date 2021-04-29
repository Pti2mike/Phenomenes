import React, { useContext, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

import PhenomenesContext from "./MyContexts";

const PhenoCardFill = ({ pheno, index, showDetails, setShowDetails }) => {
  const { phenomenes, setPhenomenes, setPhenomeneSelected } = useContext(
    PhenomenesContext
  );

  const [phenoButton, setPhenoButton] = useState({});

  // Hover
  const seeButton = (event, index) => {
    event.preventDefault();
    setPhenoButton(index);
  };

  // Supprimer un form
  const deletePheno = async (id) => {
    console.log(id); // on récupère l'id du form concerné
    try {
      const response = await axios.delete(
        `http://localhost:3000/delete-phenomenon/${id}`
      );

      const phenomenesUpdated = phenomenes.filter((pheno) => pheno._id !== id);

      setPhenomenes(phenomenesUpdated);
    } catch (error) {
      alert(error.message);
    }
  };

  //   Selectionner un phéno

  const selectPheno = () => {
    setPhenomeneSelected(pheno);
    setShowDetails(true);
  };

  return (
    <Card
      style={{
        marginBottom: 5,
        cursor: "pointer",
      }}
      // Au survol, affichage des buttons ou non
      onMouseEnter={(event) => seeButton(event, index)}
      onMouseLeave={(event) => seeButton(event, null)}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          {pheno.phenomene} - {pheno.territoire}
        </div>

        <div
          style={{
            display: phenoButton === index ? "" : "none",
          }}
        >
          <FontAwesomeIcon
            style={{ marginRight: 20 }}
            icon={faPlus}
            onClick={selectPheno}
          />
          <FontAwesomeIcon
            style={{ marginRight: 20 }}
            icon={faTrashAlt}
            onClick={() => {
              deletePheno(pheno._id);
            }}
          />

          <FontAwesomeIcon icon={faEye} onClick={selectPheno} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PhenoCardFill;
