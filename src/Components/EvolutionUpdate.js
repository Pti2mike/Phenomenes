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
  evo,
}) => {
  const [evolType, setEvolType] = useState(evo.type || "");
  const [evolMajore, setEvolMajore] = useState(evo.majorated || "");
  const [evolDate, setEvolDate] = useState(
    (evo.date && format(new Date(evo.date), "dd/MM/yyyy")) || ""
  );
  const [evolDouleur, setEvolDouleur] = useState(evo.douleur || 1);
  const [evolMobility, setEvolMobility] = useState(evo.mobility || "");
  const [evolCheckUp, setEvolCheckUp] = useState(evo.checkUp || "");
  const [evolPrecision, setEvolPrecision] = useState(evo.precision || "");

  console.log(evo);

  const { register, handleSubmit } = useForm();

  const onSubmitEvoUpdate = (formEvoValues, idPhenomenon, idEvolution) => {
    console.log(formEvoValues);
  };

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
      alert(error.message);
    }
  };

  return isEditing ? (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Form onSubmit={handleSubmit(onSubmitEvoUpdate)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Group controlId="Evolutions">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Evolutions :
              </Form.Label>
              <Form.Control as="input" disabled value={evo.type}></Form.Control>
            </Form.Group>

            <Form.Group controlId="Majorated">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Majoré par le mouvement :
              </Form.Label>
              <Form.Control
                as="input"
                disabled
                value={evo.majorated}
              ></Form.Control>
            </Form.Group>

            <div>
              <Form.Group controlId="Date">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Date :
                </Form.Label>
                <Form.Control
                  as="input"
                  disabled
                  value={evo.date && format(new Date(evo.date), "dd/MM/yyyy")}
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
                  disabled
                  min="1"
                  max="10"
                  style={{ width: 575 }}
                  value={evo.douleur}
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
                {evo.douleur}
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
                  disabled
                  value={evo.precision}
                ></Form.Control>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="Mobilité">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Mobilité globale restreinte :
                </Form.Label>
                <Form.Control disabled value={evo.mobility}></Form.Control>
              </Form.Group>

              <Form.Group controlId="CheckUp">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Bilan Médical :
                </Form.Label>
                <Form.Control disabled value={evo.checkUp}></Form.Control>
              </Form.Group>
            </div>
          </div>
        </Form>
      </div>
    </div>
  ) : (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Form onSubmit={handleSubmit(onSubmitEvoUpdate)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Group controlId="Evolutions">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Evolutions :
              </Form.Label>
              <Form.Control as="select" {...register("evolType")}>
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
              <Form.Control as="select" {...register("evolMajore")}>
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
                  type="text"
                  {...register("evolDate")}
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
                  min="1"
                  max="10"
                  style={{ width: 575 }}
                  {...register("evolDouleur")}
                ></Form.Control>
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
                  {...register("evolPrecision")}
                ></Form.Control>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="Mobilité">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Mobilité globale restreinte :
                </Form.Label>
                <Form.Control as="select" {...register("evolMobility")}>
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
                <Form.Control as="select" {...register("evolCheckUp")}>
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
                    type="submit"
                    // onClick={() => {
                    //   handleSaveEvo(pheno._id, evolution._id);
                    // }}
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
