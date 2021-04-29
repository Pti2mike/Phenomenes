import React, { useContext } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Button, Form } from "react-bootstrap";
import majorated from "../data/majorated.js";
import checkUp from "../data/checkUp.js";
import mobilities from "../data/mobilities";
import evolutions from "../data/evolutions";
import { useForm } from "react-hook-form";
import PhenomenesContext from "./MyContexts";

const EvolutionUpdate = ({ isEditing, setIsEditing, evo }) => {
  const {
    phenomenes,
    setPhenomenes,
    phenomeneSelected,
    setPhenomeneSelected,
    evolutionSelected,
    setEvolutionSelected,
  } = useContext(PhenomenesContext);

  const { register, handleSubmit } = useForm();

  const onSubmitEvoUpdate = async (
    formEvoValues,
    idPhenomenon,
    idEvolution
  ) => {
    idPhenomenon = phenomeneSelected._id;
    idEvolution = evolutionSelected;

    try {
      const response = await axios.put(
        `http://localhost:3000/phenomenon/${idPhenomenon}/update-evolution/${idEvolution}`,
        formEvoValues
      );

      console.log(response);

      setPhenomenes(
        phenomenes.map((p) => {
          if (p._id === idPhenomenon) {
            return response.data.resultat;
          }
          return p;
        })
      );

      setPhenomeneSelected(response.data.resultat);

      setIsEditing(!isEditing);
    } catch (error) {
      alert({ error: error.message });
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
              <Form.Control
                as="input"
                disabled
                defaultValue={evo.type}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Majorated">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Majoré par le mouvement :
              </Form.Label>
              <Form.Control
                as="input"
                disabled
                defaultValue={evo.majorated}
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
                  defaultValue={
                    evo.date && format(new Date(evo.date), "dd/MM/yyyy")
                  }
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
                  defaultValue={evo.douleur}
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
                  defaultValue={evo.precision}
                ></Form.Control>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="Mobilité">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Mobilité globale restreinte :
                </Form.Label>
                <Form.Control
                  disabled
                  defaultValue={evo.mobility}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="CheckUp">
                <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                  Bilan Médical :
                </Form.Label>
                <Form.Control
                  disabled
                  defaultValue={evo.checkUp}
                ></Form.Control>
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
              <Form.Control
                as="select"
                {...register("evolType")}
                defaultValue={evo.type}
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
                {...register("evolMajore")}
                defaultValue={evo.majorated}
              >
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
                  type="date"
                  {...register("evolDate")}
                  defaultValue={
                    evo.date && format(new Date(evo.date), "dd/MM/yyyy")
                  }
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
                  defaultValue={evo.douleur}
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
                  defaultValue={evo.precision}
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
                  {...register("evolMobility")}
                  defaultValue={evo.mobility}
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
                  {...register("evolCheckUp")}
                  defaultValue={evo.checkUp}
                >
                  {checkUp.map((check, index) => (
                    <option key={index} value={check}>
                      {check}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <div>
                {!isEditing && <Button type="submit">Sauvegarder</Button>}
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EvolutionUpdate;
