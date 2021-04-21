import React from "react";
import majorated from "../data/majorated.js";
import checkUp from "../data/checkUp.js";
import mobilities from "../data/mobilities";
import evolutions from "../data/evolutions";
import axios from "axios";
import { Accordion, Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Evolution = ({ data, setData, pheno }) => {
  // console.log(pheno);

  const { register, handleSubmit, reset } = useForm();

  const onSubmitFormEvo = async (formValues, idPheno) => {
    console.log(formValues);
    idPheno = pheno._id;
    try {
      const response = await axios.post(
        `http://localhost:3000/add-evolution/${idPheno}`,
        formValues
      );

      console.log(response);

      if (response.status === 200) {
        setData(
          // Je récupère l'ancien état qui est un tableau
          (data) => {
            // Je parcours mon tableau
            return data.map((row) => {
              // Si row._id est égal à idPheno passé en paramètre
              if (row._id === idPheno) {
                // alors je le remplace par response.data.resultat
                return response.data.resultat;
              }
              // Sinon je retourne row
              return row;
            });
          }
        );
      }
      reset();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
      }}
    >
      <Accordion>
        <Card>
          <Card.Header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 0,
            }}
          >
            <Card.Title style={{ marginBottom: 0 }}>
              {/* {evolType ? evolType : "Ajouter une évolution"} */}
              Ajouter une évolution
            </Card.Title>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Voir
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmitFormEvo)}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Form.Group controlId="Evolutions">
                    <Form.Label
                      style={{ display: "flex", justifyContent: "left" }}
                    >
                      Evolutions :
                    </Form.Label>
                    <Form.Control as="select" {...register("evolType")}>
                      <option value="">Evolutions</option>
                      {evolutions.map((evo, index) => (
                        <option key={index} value={evo}>
                          {evo}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="Majorated">
                    <Form.Label
                      style={{ display: "flex", justifyContent: "left" }}
                    >
                      Majoré par le mouvement :
                    </Form.Label>
                    <Form.Control as="select" {...register("evolMajore")}>
                      <option value="">Majoré par le mouvement</option>
                      {majorated.map((major, index) => (
                        <option key={index} value={major}>
                          {major}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <div>
                    <Form.Group controlId="Date">
                      <Form.Label
                        style={{ display: "flex", justifyContent: "left" }}
                      >
                        Date :
                      </Form.Label>
                      <Form.Control
                        as="input"
                        type="date"
                        {...register("evolDate")}
                      />
                    </Form.Group>
                  </div>
                </div>

                <div id="slidecontainer">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Form.Group
                      controlId="Douleur"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight: 20,
                      }}
                    >
                      <Form.Label
                        style={{ display: "flex", justifyContent: "left" }}
                      >
                        Douleur :
                      </Form.Label>
                      <Form.Control
                        type="range"
                        // custom

                        min="1"
                        max="10"
                        style={{ width: 575 }}
                        {...register("evolDouleur")}
                      />
                    </Form.Group>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 13,
                      }}
                    >
                      <i id="douleur"></i>
                      {""}
                      /10
                    </div>
                  </div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Form.Group controlId="Précision">
                      <Form.Label
                        style={{ display: "flex", justifyContent: "left" }}
                      >
                        Précision :
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        size="lg"
                        rows={4}
                        cols={30}
                        placeholder="Votre texte ici..."
                        {...register("evolPrecision")}
                      ></Form.Control>
                    </Form.Group>
                  </div>
                  <div>
                    <Form.Group controlId="Mobilité">
                      <Form.Label
                        style={{ display: "flex", justifyContent: "left" }}
                      >
                        Mobilité globale restreinte :
                      </Form.Label>
                      <Form.Control as="select" {...register("evolMobility")}>
                        <option value="">Mobilité globale restreinte</option>
                        {mobilities.map((mobility, index) => (
                          <option key={index} value={mobility}>
                            {mobility}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="CheckUp">
                      <Form.Label
                        style={{ display: "flex", justifyContent: "left" }}
                      >
                        Bilan Médical :
                      </Form.Label>
                      <Form.Control as="select" {...register("evolCheckUp")}>
                        <option value="">Bilan Médical</option>
                        {checkUp.map((check, index) => (
                          <option key={index} value={check}>
                            {check}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    <div>
                      <Button type="submit">Sauvegarder</Button>
                    </div>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Evolution;
