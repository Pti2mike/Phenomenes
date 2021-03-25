import React, { useState, useEffect } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import { format } from "date-fns";
import Evolution from "./Evolution";

const ReadEvolution = ({ forms, id }) => {
  const [info, setInfo] = useState();
  const [showModal, setShowModal] = useState(false);
  console.log(info);

  // console.log("forms", forms);

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

  // console.log(info.evolutions);

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

      {/* Test Accordion */}
      {info && (
        <>
          <div>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header
                closeButton
                onClick={() => {
                  setShowModal();
                }}
              >
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal>
          </div>

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
                            <Button onClick={() => {}}>Supprimer</Button>
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
