import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Button, Form } from "react-bootstrap";
import PainBar from "./PainBar";
import majorated from "../data/majorated.js";
import checkUp from "../data/checkUp.js";
import mobilities from "../data/mobilities";
import evolutions from "../data/evolutions";
import { useForm } from "react-hook-form";

const EvolutionUpdate = ({
  data,
  setData,
  evolution,
  pheno,
  isEditing,
  setIsEditing,
}) => {
  const [evolType, setEvolType] = useState(evolution.type || "");
  const [evolMajore, setEvolMajore] = useState(evolution.majorated || "");
  const [evolDate, setEvolDate] = useState(
    (evolution.date && format(new Date(evolution.date), "dd/MM/yyyy")) || ""
  );
  const [evolDouleur, setEvolDouleur] = useState(evolution.douleur || 1);
  const [evolMobility, setEvolMobility] = useState(evolution.mobility || "");
  const [evolCheckUp, setEvolCheckUp] = useState(evolution.checkUp || "");
  const [evolPrecision, setEvolPrecision] = useState(evolution.precision || "");

  const { register, handleSubmit, formState, control } = useForm();

  const handleSaveEvo = async (idPhenomenon, idEvolution) => {
    console.log(`evoToUpdate ${idPhenomenon} ${idEvolution}`); // on récupère l'id du form et l'id de l'evolution concernés
    try {
      const response = await axios.put(
        `http://localhost:3000/phenomenon/${idPhenomenon}/update-evolution/${idEvolution}`,
        {
          evolType,
          evolMajore,
          evolMobility,
          evolDate,
          evolDouleur,
          evolPrecision,
          evolCheckUp,
        }
      );
      console.log(response);

      // setData([
      //   ...data.map((row) => {
      //     if (row._id === evolution._id) {
      //       row.evolutions.push(response.data.resultat);
      //     }
      //     return row;
      //   }),
      // ]);

      setData(
        data.map((pheno) => {
          if (pheno._id === idPhenomenon) {
            pheno.evolutions = pheno.evolutions.map((evo) => {
              if (evo._id === idEvolution) {
                return response.data.resultat;
              }
              return evo;
            });
          }
          return pheno;
        })
      );

      setEvolType("");
      setEvolMajore("");
      setEvolMobility("");
      setEvolDate("");
      setEvolDouleur(1);
      setEvolPrecision("");
      setEvolCheckUp("");

      setIsEditing(!isEditing);
    } catch (error) {
      alert({ error: error.message });
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Form>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Group controlId="Evolutions">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Evolutions :
              </Form.Label>
              <Form.Control
                as="select"
                disabled={isEditing ? "disabled" : ""}
                value={isEditing && evolution.type}
                // onChange={(event) => {
                //   setEvolType(event.target.value);
                // }}
                {...register("evolutions")}
              >
                {evolutions.map((evo, index) => (
                  <option key={index} value={evo}>
                    {evo}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="Majorated">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Majoré par le mouvement :
              </Form.Label>
              <Form.Control
                as="select"
                disabled={isEditing ? "disabled" : ""}
                value={isEditing ? evolution.majorated : evolMajore}
                onChange={(event) => {
                  setEvolMajore(event.target.value);
                }}
              >
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
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Date :
                </Form.Label>
                <Form.Control
                  as="input"
                  type={isEditing ? "text" : "date"}
                  disabled={isEditing ? "disabled" : ""}
                  value={
                    isEditing
                      ? evolution.date
                        ? format(new Date(evolution.date), "dd/MM/yyyy")
                        : evolDate
                      : evolDate
                  }
                  onChange={(event) => {
                    setEvolDate(event.target.value);
                  }}
                ></Form.Control>
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
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Douleur :
                </Form.Label>
                <Form.Control
                  type="range"
                  // custom
                  disabled={isEditing ? "disabled" : ""}
                  min="1"
                  max="10"
                  style={{ width: 575 }}
                  value={isEditing ? evolution.douleur : evolDouleur}
                  onChange={(event) => {
                    setEvolDouleur(event.target.value);
                  }}
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
                {isEditing && evolution.douleur
                  ? evolution.douleur
                  : evolDouleur}
                /10
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Form.Group controlId="Précision">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Précision :
                </Form.Label>
                <Form.Control
                  as="textarea"
                  size="lg"
                  rows={4}
                  cols={35}
                  disabled={isEditing ? "disabled" : ""}
                  placeholder="Votre texte ici..."
                  value={isEditing ? evolution.precision : evolPrecision}
                  onChange={(event) => {
                    setEvolPrecision(event.target.value);
                  }}
                ></Form.Control>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="Mobilité">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Mobilité globale restreinte :
                </Form.Label>
                <Form.Control
                  as="select"
                  disabled={isEditing ? "disabled" : ""}
                  value={isEditing ? evolution.mobility : evolMobility}
                  onChange={(event) => {
                    setEvolMobility(event.target.value);
                  }}
                >
                  {mobilities.map((mobility, index) => (
                    <option key={index} value={mobility}>
                      {mobility}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="CheckUp">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Bilan Médical :
                </Form.Label>
                <Form.Control
                  as="select"
                  disabled={isEditing ? "disabled" : ""}
                  value={isEditing ? evolution.checkUp : evolCheckUp}
                  onChange={(event) => {
                    setEvolCheckUp(event.target.value);
                  }}
                >
                  <option value="">Bilan Médical</option>
                  {checkUp.map((check, index) => (
                    <option key={index} value={check}>
                      {check}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <div>
                {!isEditing && (
                  <Button
                    onClick={() => {
                      handleSaveEvo(pheno._id, evolution._id);
                    }}
                  >
                    Sauvegarder
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EvolutionUpdate;
