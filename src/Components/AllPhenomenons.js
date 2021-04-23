import React, { useState, useContext } from "react";
import axios from "axios";
import Phenomenons from "./Phenomenons";
import PainBar from "./PainBar";
import phenomenons from "../data/phenomenons";
import territoires from "../data/territoires";
import majorated from "../data/majorated";
import mobilities from "../data/mobilities";
import checkUp from "../data/checkUp";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhenomenesContext from "./MyContexts";

const AllPhenomenons = () => {
  // const [data, setData] = useState({});

  const { phenomenes, setPhenomenes } = useContext(PhenomenesContext);
  // console.log(phenomenes);

  // Validation du phénomène

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   phenoToSave();
  //   setForm({
  //     pheno: "",
  //     territoire: "",
  //     majore: "",
  //     date: "",
  //     douleur: 1,
  //     mobility: "",
  //     checkUp: "",
  //     precision: "",
  //   });
  // };

  const { register, handleSubmit, reset } = useForm();

  // Validation du phénomène

  const onSubmitForm = async (formValues) => {
    console.log(formValues);
    try {
      const response = await axios.post(
        "http://localhost:3000/add-phenomenon",
        formValues
      );
      console.log(response);

      if (response.status === 200) {
        setPhenomenes(response.data.resultat);
        reset();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Form style={{ marginBottom: 50 }} onSubmit={handleSubmit(onSubmitForm)}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form.Group controlId="Phenomene">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Nom du phénomène :
              </Form.Label>
              <Form.Control as="select" {...register("phenomene")}>
                <option value="">Nom du phénomène</option>
                {phenomenons.map((pheno, index) => (
                  <option key={index} value={pheno}>
                    {pheno}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form.Group controlId="Territoire">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Territoire :
              </Form.Label>
              <Form.Control as="select" {...register("territoire")}>
                <option value="">Territoire</option>
                {territoires.map((territoire, index) => (
                  <option key={index} value={territoire}>
                    {territoire}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form.Group controlId="Majorated">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Majoré par le mouvement :
              </Form.Label>
              <Form.Control as="select" {...register("majore")}>
                <option value="">Majoré par le mouvement</option>
                {majorated.map((major, index) => (
                  <option key={index} value={major}>
                    {major}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>

          <div>
            <Form.Group controlId="Date">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Date :
              </Form.Label>
              <Form.Control
                as="input"
                type="date"
                {...register("date")}
              ></Form.Control>
            </Form.Group>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 20,
          }}
        >
          <div>
            <Form.Group>
              <Form.Label>Douleur :</Form.Label>
              <PainBar
                // form={form}
                // pain={pain}
                {...register("douleur")}
                id="douleur"
              />
            </Form.Group>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form.Group controlId="Mobilité">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Mobilité globale restreinte :
              </Form.Label>
              <Form.Control as="select" {...register("mobility")}>
                <option value="">Mobilité globale restreinte</option>
                {mobilities.map((mobility, index) => (
                  <option key={index} value={mobility}>
                    {mobility}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form.Group controlId="CheckUp">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Bilan Médical :
              </Form.Label>
              <Form.Control as="select" {...register("checkUp")}>
                <option value="">Bilan Médical</option>
                {checkUp.map((check, index) => (
                  <option key={index} value={check}>
                    {check}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 20,
          }}
        >
          <Form.Group controlId="Précision">
            <Form.Label style={{ display: "flex", justifyContent: "left" }}>
              Précision :
            </Form.Label>
            <Form.Control
              as="textarea"
              size="lg"
              rows={4}
              {...register("precision")}
            ></Form.Control>
          </Form.Group>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              backgroundColor: "#0069d9",
              color: "white",
              cursor: "pointer",
              borderRadius: 5,
              border: "none",
              padding: 8,
              width: 160,
            }}
          >
            Ajouter
          </button>
        </div>
      </Form>

      <Phenomenons />
    </div>
  );
};

export default AllPhenomenons;
