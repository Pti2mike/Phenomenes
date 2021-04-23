import React, { useState, useContext } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import PhenomenesContext from "./MyContexts";

const PhenomenonCard = () => {
  const {
    phenomenes,
    setPhenomenes,
    phenomeneSelected,
    setPhenomeneSelected,
  } = useContext(PhenomenesContext);

  const [phenoSelected, setPhenoSelected] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedID, setSelectedID] = useState("");
  const [selectedEvolID, setSelectedEvolID] = useState({});

  console.log("phenoSelected", phenoSelected);
  // console.log("Phénomènes", data);
  // console.log("selectedEvolID", selectedEvolID);
  console.log("selectedID", selectedID);

  // Hover
  const seeButton = (event, index) => {
    event.preventDefault();
    setPhenoSelected(index);
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

  return (
    <div>
      {phenomenes &&
        phenomenes.map((pheno, index) => (
          <Card
            key={index}
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
                  display: phenoSelected === index ? "" : "none",
                }}
              >
                <FontAwesomeIcon
                  style={{ marginRight: 20 }}
                  icon={faPlus}
                  onClick={() => {
                    //   // handleShow();
                    // alert(`${pheno._id}`);
                    setSelectedID(pheno._id);
                    //   setShowDetails(!showDetails);
                    //   setSelectedEvolID(pheno);
                  }}
                />
                <FontAwesomeIcon
                  style={{ marginRight: 20 }}
                  icon={faTrashAlt}
                  onClick={() => {
                    deletePheno(pheno._id);
                  }}
                />

                <FontAwesomeIcon
                  icon={faEye}
                  // onClick={() => {
                  //   setShowDetails(!showDetails);
                  //   setSelectedEvolID(pheno);
                  // }}
                />
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default PhenomenonCard;
