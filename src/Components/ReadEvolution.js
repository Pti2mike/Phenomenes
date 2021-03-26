import React, { useState, useEffect } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import { format } from "date-fns";
import Evolution from "./Evolution";
import axios from "axios";

const ReadEvolution = ({ forms, id, setForms, setData }) => {
  const [info, setInfo] = useState();
  const [showModal, setShowModal] = useState(false);
  // console.log(info);

  // console.log("forms", forms);
  // console.log("id", id);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (forms) {
      for (let index = 0; index < forms.length; index++) {
        // console.log(forms[index]);
        if (forms[index]._id === id) {
          setInfo(forms[index]);
        }
      }
    }
  }, [forms, id]);

  // Supprimer une evolution d'un form
  const deleteEvolution = async (idForm, idEvolution) => {
    console.log(`evoToDelete ${idForm} ${idEvolution}`); // on récupère l'id du form et l'id de l'evolution concernés

    axios
      .delete(
        `http://localhost:3000/form/${idForm}/delete-evolution/${idEvolution}`
      )
      .then((response) => {
        // console.log(response.data.resultat);
        setInfo(response.data.resultat);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      style={{
        // border: "green solid",
        width: 700,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <h3>Evolutions</h3>

      {info && (
        <>
          <div>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header
                closeButton
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <Modal.Title>Modifier evolution</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                {/* Vérifier save des modif */}
                <Evolution />
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal>
          </div>

          {/* Test Accordion */}
          {info.evolutions.map((evo, index) => (
            <div key={index} style={{ marginBottom: 5 }}>
              {evo ? (
                <>
                  <Accordion>
                    <Card>
                      <Card.Header
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Card.Title>Evolution {index}</Card.Title>
                        <div style={{ display: "flex" }}>
                          <div>
                            <Button
                              style={{ marginRight: 5 }}
                              onClick={() => {
                                handleShow();
                              }}
                            >
                              Modifier
                            </Button>
                            <Button
                              style={{ marginRight: 5 }}
                              onClick={() => {
                                deleteEvolution(info._id, evo._id);
                              }}
                            >
                              Supprimer
                            </Button>
                          </div>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Voir
                          </Accordion.Toggle>
                        </div>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>Apparition</span>
                              {evo.apparation
                                ? format(new Date(evo.apparation), "dd/MM/yyyy")
                                : ""}
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>Inchangé</span>
                              {evo.unchanged
                                ? format(new Date(evo.unchanged), "dd/MM/yyyy")
                                : ""}
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>Title 1</span>
                              {evo.title1}
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>Title 2</span>
                              {evo.title2}
                            </div>
                          </div>

                          {/* 2ème bloc */}
                          <div style={{ marginBottom: 20 }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>Aggravation</span>
                              {evo.aggravation
                                ? format(
                                    new Date(evo.aggravation),
                                    "dd/MM/yyyy"
                                  )
                                : ""}
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>Disparition</span>
                              {evo.disappear
                                ? format(new Date(evo.disappear), "dd/MM/yyyy")
                                : ""}
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>Title 3</span>
                              {evo.title3}
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <span>Title 4</span>
                              {evo.title4}
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </>
              ) : null}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ReadEvolution;
