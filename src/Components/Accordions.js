import React, { useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import EvolutionUpdate from "./EvolutionUpdate";
import axios from "axios";

const Accordions = ({ data, setData, pheno, evolution, index }) => {
  const [isEditing, setIsEditing] = useState(true);

  // Supprimer une evolution d'un phenomène
  const deleteEvolution = async (idPhenomenon, idEvolution) => {
    console.log(`evoToDelete ${idPhenomenon} ${idEvolution}`); // on récupère l'id du form et l'id de l'evolution concernés

    axios
      .delete(
        `http://localhost:3000/phenomenon/${idPhenomenon}/delete-evolution/${idEvolution}`
      )
      .then((response) => {
        console.log(response.data.resultat);

        setData(
          data.map((row) => {
            if (row._id === pheno._id) {
              return {
                ...row,
                evolutions: pheno.evolutions.filter(
                  (rowEvo) => rowEvo._id !== idEvolution
                ),
              };
            }
            return row;
          })
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
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
              {evolution.type}
            </Card.Title>
            <div style={{ display: "flex" }}>
              <div>
                {isEditing ? (
                  <Button
                    style={{ marginRight: 5 }}
                    onClick={() => {
                      // updateEvolution(pheno._id, evo._id);
                      setIsEditing(!isEditing);
                      alert("Mode modification");
                    }}
                  >
                    Modifier
                  </Button>
                ) : (
                  <Button
                    variant="danger"
                    style={{ marginRight: 5 }}
                    onClick={() => {
                      // updateEvolution(pheno._id, evo._id);
                      setIsEditing(!isEditing);
                      alert("Annuler modification");
                    }}
                  >
                    Annuler
                  </Button>
                )}

                <Button
                  style={{ marginRight: 5 }}
                  onClick={() => {
                    deleteEvolution(pheno._id, evolution._id);
                  }}
                >
                  Supprimer
                </Button>
              </div>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Voir
              </Accordion.Toggle>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <EvolutionUpdate
                data={data}
                setData={setData}
                pheno={pheno}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                evolution={evolution}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Accordions;
