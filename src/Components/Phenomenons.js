import React, { useState } from "react";
import axios from "axios";
import Evolution from "./Evolution";
import AllEvolutions from "./AllEvolutions";
import "./Phenomenons.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

const Phenomenons = ({ data, setData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [phenoSelected, setPhenoSelected] = useState(null);
  const [selectedID, setSelectedID] = useState();
  const [selectedEvolID, setSelectedEvolID] = useState({});

  // console.log("phenoSelected", phenoSelected);
  // console.log("Phénomènes", data);
  console.log("selectedEvolID", selectedEvolID);
  console.log("selectedID", selectedID);

  // Hover
  const seeButton = (event, index) => {
    event.preventDefault();
    setPhenoSelected(index);
  };

  // Visibilité section all Evolutions
  const visibility = selectedEvolID._id ? "visible" : "hidden";

  // Supprimer un form
  const deleteForm = async (id) => {
    // console.log(id); // on récupère l'id du form concerné
    try {
      const response = await axios.post(`http://localhost:3000/delete-form`, {
        id,
      });
      if (response.data.message === "Deleted") {
        setData(response.data.resultat);
      }
      console.log("deleteForm", response);
    } catch (error) {
      alert({ error: error.message });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        border: "solid gray",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h3>Phénomènes</h3>
        {/* Afficher la liste des phénomènes */}

        {data &&
          data.length > 0 &&
          data.map((form, index) => {
            return (
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
                    {form.pheno} - {form.territoire}
                  </div>

                  <div
                    style={{
                      display: phenoSelected === index ? "" : "none",
                      justifyContent: "space-between",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      // style={{ display: phenoSelected === index ? "" : "none" }}
                      onClick={() => {
                        // handleShow();
                        setSelectedID(form._id);
                        alert("Voulez-vous ajouter une evolution ?");
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      // style={{ display: phenoSelected === index ? "" : "none" }}
                      onClick={() => {
                        alert(`Delete ${form.pheno} ${form.territoire} ?`);

                        deleteForm(form._id);
                      }}
                    />

                    <FontAwesomeIcon
                      icon={faEye}
                      // style={{ display: phenoSelected === index ? "" : "none" }}
                      onClick={() => {
                        setShowDetails(!showDetails);
                        setSelectedEvolID(form);
                        alert("Voulez-vous voir les evolutions ?");
                      }}
                    />
                  </div>
                </Card.Body>
              </Card>
            );
          })}
      </div>

      <div style={{ visibility }}>
        <AllEvolutions data={data} pheno={selectedEvolID} setData={setData} />
      </div>
    </div>
  );
};

export default Phenomenons;
