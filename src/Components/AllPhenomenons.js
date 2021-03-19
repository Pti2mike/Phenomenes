import React, { useState } from "react";
import axios from "axios";
import Evolution from "./Evolution";
import "./AllPhenomenons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";

const AllPhenomenons = ({ forms, setForms, saveData, setSaveData }) => {
  const [hoverTest, setHoverTest] = useState("notdisplayed");
  const [showDetails, setShowDetails] = useState(false);
  const [formSelected, setFormSelected] = useState();

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

<<<<<<< HEAD
  // console.log(formSelected);
  console.log(forms);
=======
  console.log(formSelected);
>>>>>>> b3019b61db80d802cc6feacf869e5b1f1ef7c93a

  // Test Hover
  const seeButton = (event) => {
    event.preventDefault();
    setHoverTest("displayed");
    setFormSelected(event);
  };

  const hideButton = (event) => {
    event.preventDefault();
    setHoverTest("notdisplayed");
  };

  // Test visibilité
  const visibility = showDetails ? "visible" : "hidden";

  // Supprimer un form à revoir !!!!!! Pb identification via id
  const deleteForm = async (id) => {
    console.log(forms);
    try {
      const response = await axios.delete(
        `http://localhost:3000/delete-form/${id}`,
        forms._id
      );
      console.log("deleteForm", response);
    } catch (error) {
      alert({ error: error.message });
    }
  };

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
        {/* {saveData.map((row, index) => { */}

        {forms &&
          forms.map((form, index) => {
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
<<<<<<< HEAD
                <div>
                  {form.pheno} - {form.territoire}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: 50,
=======
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className={hoverTest}
                  onClick={() => {
                    alert(`Delete ${row.pheno} ${row.territoire} ?`);
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
                    // Pour afficher l'évolution d'un phénomène
                    // Copie saveData
                    const newData = [...saveData];

                    setSaveData(newData);

                    setShowDetails(!showDetails);
                    setShowModal(handleShow);
>>>>>>> b3019b61db80d802cc6feacf869e5b1f1ef7c93a
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className={hoverTest}
                    onClick={() => {
                      alert(`Delete ${form.pheno} ${form.territoire} ?`);
                      deleteForm();
                      // Pour supprimer un phénomène
                      // Copie saveData
                      // const newData = [...saveData];

                      //Copie forms
                      const newData = [...forms];

                      // Suppression d'un élément selon son index
                      newData.splice(index, 1);
                      // Rafraichissement de l'état avec newData
                      setForms(newData);
                      // setSaveData(newData);
                      // setShowDetails(!showDetails);
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

                      setSaveData(newData);

                      setShowDetails(!showDetails);
                      setShowModal(handleShow);
                    }}
                  />
                </div>
              </div>
<<<<<<< HEAD
            );
          })}
=======
            </div>
          );
        })}
>>>>>>> b3019b61db80d802cc6feacf869e5b1f1ef7c93a

        <div>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header
              // closeButton
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Modal.Title>Evolutions</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
              <Evolution saveData={saveData} setSaveData={setSaveData} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      {/* <ModalTest /> */}

      <div style={{ visibility }}>
        <Evolution saveData={saveData} setSaveData={setSaveData} />
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
