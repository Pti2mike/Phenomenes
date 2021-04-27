import React, { useContext, useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import EvolutionUpdate from "./EvolutionUpdate";
import axios from "axios";
import PhenomenesContext from "./MyContexts";

const Accordions = ({ pheno, evolution, index, evo }) => {
  const { phenomenes, setPhenomenes, phenomeneSelected } = useContext(
    PhenomenesContext
  );
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

        setPhenomenes(
          phenomenes.map((row) => {
            if (row._id === phenomeneSelected._id) {
              return {
                ...row,
                evolutions: phenomeneSelected.evolutions.filter(
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
            <Card.Title style={{ marginBottom: 0 }}>{evo.type}</Card.Title>
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
                    deleteEvolution(phenomeneSelected._id, evo._id);
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
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                evo={evo}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Accordions;
