import React, { useState } from "react";
import axios from "axios";
import Evolution from "./Evolution";
import ReadEvolution from "./ReadEvolution";
import "./AllPhenomenons.css";
import { Button, Card, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const AllPhenomenons = ({ forms, setForms, setData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [formSelected, setFormSelected] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [appartionDate, setAppartionDate] = useState("");
  const [unchangedDate, setUnchangedDate] = useState("");
  const [aggravationDate, setAggravationDate] = useState("");
  const [disappearedDate, setDisappearedDate] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  const [title4, setTitle4] = useState("");
  const [seletedID, setSelectedID] = useState();
  const [selectedEvolID, setSelectedEvolID] = useState();

  // console.log("props", forms);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  // console.log("formSlected", formSelected);
  // console.log("forms", data);

  // Test Hover
  const seeButton = (event, index) => {
    event.preventDefault();
    setFormSelected(index);
  };

  // Test visibilité
  const visibility = selectedEvolID ? "visible" : "hidden";

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

  const handleSubmit = async () => {
    if (
      appartionDate !== "" ||
      unchangedDate !== "" ||
      aggravationDate !== "" ||
      disappearedDate !== "" ||
      title1 !== "" ||
      title2 !== "" ||
      title3 !== "" ||
      title4 !== ""
    ) {
      const response = await axios.post(
        `http://localhost:3000/add-evolution/${seletedID}`,
        {
          appartionDate,
          unchangedDate,
          aggravationDate,
          disappearedDate,
          title1,
          title2,
          title3,
          title4,
        }
      );
      // setData(response.data.resultat);
      setData([
        ...forms.map((row) => {
          if (row._id === seletedID) {
            row.evolutions.push(response.data.resultat);
          }
          return row;
        }),
      ]);
      setAppartionDate("");
      setUnchangedDate("");
      setAggravationDate("");
      setDisappearedDate("");
      setTitle1("");
      setTitle2("");
      setTitle3("");
      setTitle4("");
      handleClose();
    } else {
      alert("Merci de remplir un champ");
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
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header
            // closeButton
            style={{
              display: "flex",
              // justifyContent: "center",

              alignItems: "center",
            }}
          ></Modal.Header>
          <Modal.Body>
            <Evolution
              appartionDate={appartionDate}
              setAppartionDate={setAppartionDate}
              unchangedDate={unchangedDate}
              setUnchangedDate={setUnchangedDate}
              aggravationDate={aggravationDate}
              setAggravationDate={setAggravationDate}
              disappearedDate={disappearedDate}
              setDisappearedDate={setDisappearedDate}
              title1={title1}
              setTitle1={setTitle1}
              title2={title2}
              setTitle2={setTitle2}
              title3={title3}
              setTitle3={setTitle3}
              title4={title4}
              setTitle4={setTitle4}
              seletedID={seletedID}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div
        style={{
          width: 500,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <h3>Tous les Phénomènes</h3>
        {/* Afficher la liste des phénomènes */}

        {forms &&
          forms.length > 0 &&
          forms.map((form, index) => {
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
                onClick={() => {
                  setShowDetails(!showDetails);
                  setSelectedEvolID(form._id);
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    {form.pheno} - {form.territoire}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: 50,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      style={{ display: formSelected === index ? "" : "none" }}
                      onClick={() => {
                        alert(`Delete ${form.pheno} ${form.territoire} ?`);

                        deleteForm(form._id);
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ display: formSelected === index ? "" : "none" }}
                      onClick={() => {
                        alert("Open evolution");

                        handleShow();
                        setSelectedID(form._id);
                      }}
                    />
                  </div>
                </Card.Body>
              </Card>
            );
          })}
      </div>

      <div style={{ visibility }}>
        <ReadEvolution
          forms={forms}
          id={selectedEvolID}
          setForms={setForms}
          setData={setData}
        />
      </div>
    </div>
  );
};

export default AllPhenomenons;
