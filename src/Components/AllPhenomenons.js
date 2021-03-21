import React, { useState } from "react";
import axios from "axios";
import Evolution from "./Evolution";
import ReadEvolution from "./ReadEvolution";
import "./AllPhenomenons.css";
import { Button, Modal } from "react-bootstrap";
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

  // Supprimer un form à revoir !!!!!! Pb identification via id
  const deleteForm = async (id) => {
    console.log(id);
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
        "http://localhost:3000/update-evolution",
        {
          id: seletedID,
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
      setData(response.data.resultat);
      setAppartionDate("");
      setUnchangedDate("");
      setAggravationDate("");
      setDisappearedDate("");
      setTitle1("");
      setTitle2("");
      setTitle3("");
      setTitle4("");
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
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
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

        {forms &&
          forms.length > 0 &&
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
                  cursor: "pointer",
                }}
                className="box-list"
                // Au survol, affichage des buttons ou non
                onMouseEnter={(event) => seeButton(event, index)}
                onMouseLeave={(event) => seeButton(event, null)}
                onClick={() => {
                  setShowDetails(!showDetails);
                  setSelectedEvolID(form._id);
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
              </div>
            );
          })}
      </div>

      <div style={{ visibility }}>
        <ReadEvolution forms={forms} id={selectedEvolID} />
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
