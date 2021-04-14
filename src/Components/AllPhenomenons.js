import React, { useState, useEffect } from "react";
import axios from "axios";
import Phenomenons from "./Phenomenons";
import PainBar from "./PainBar";
import { Alert, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";

const AllPhenomenons = () => {
  const phenomenons = [
    "...",
    "Douleur",
    "Courbatures",
    "Asthénie",
    "Vertiges",
    "Paresthésie",
    "Céphalée",
    "Autre",
  ];

  const territoires = [
    "...",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "S1",
    "S2",
    "S3",
    "S4",
    "K1",
    "K2",
    "K3",
    "K4",
    "K5",
    "K6",
    "K7",
    "K8",
    "K9",
    "K10",
    "K11",
    "K12",
    "Tête",
    "Crane",
    "Face",
    "Cou",
    "Epaule",
    "Bras",
    "Coude",
    "Avant-bras",
    "Poignet",
    "Main",
    "Thorax",
    "Abdomen",
    "Epigastre",
    "Hypochondre",
    "Flanc",
    "Région péri ombilicale",
    "Fosse iliaque",
    "Hypogastre",
    "Lombes",
    "Fesse",
    "Coccyx",
    "Périnée",
    "Région génitale",
    "Région annale",
    "Hanche",
    "Cuisse",
    "Genou",
    "Jambe",
    "Cheville",
    "Pied",
  ];

  const majorated = ["...", "oui", "non"];

  const mobilities = ["...", "oui", "non"];

  const checkUp = ["...", "Absent", "Bénin"];

  const [data, setData] = useState({});
  const [form, setForm] = useState({});

  // Get all data from database

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/all-phenomenons");

      setData(response.data.phenomenons);
    } catch (error) {
      alert({ error: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Phénomènes à save

  const phenoToSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/add-phenomenon",
        // form
        data
      );
      console.log(response);
      setData(response.data.resultat);
    } catch (error) {
      alert({ error: error.message });
    }
  };

  // Modification du phénomène TEST switch

  // const handleChange = (event, type) => {
  //   switch (type) {
  //     case "pheno":
  //       setForm({ ...form, pheno: event.target.value });
  //       break;
  //     case "territoire":
  //       setForm({ ...form, territoire: event.target.value });
  //       break;
  //     case "majore":
  //       setForm({ ...form, majore: event.target.value });
  //       break;
  //     case "date":
  //       setForm({ ...form, date: event.target.value });
  //       break;
  //     case "douleur":
  //       setForm({ ...form, douleur: event.target.value });
  //       break;
  //     case "mobility":
  //       setForm({ ...form, mobility: event.target.value });
  //       break;
  //     case "checkUp":
  //       setForm({ ...form, checkUp: event.target.value });
  //       break;
  //     case "precision":
  //       setForm({ ...form, precision: event.target.value });
  //       break;
  //     default:
  //       console.log("Type non trouvé");
  //       break;
  //   }
  // };

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

  const { register, handleSubmit, formState, control } = useForm();

  const { isSubmitting, isSubmitted, isSubmitSuccessful } = formState;

  const onSubmit = async (data) => {
    console.log(data);
    // phenoToSave();
  };

  console.log(formState);

  return (
    <div>
      <Form style={{ marginBottom: 50 }} onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful && (
          <Alert variant="success">Formulaire enregistré</Alert>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form.Group controlId="Phénomène">
              <Form.Label style={{ display: "flex", justifyContent: "left" }}>
                Nom du phénomène :
              </Form.Label>
              <Form.Control as="select" {...register("phenomenon")}>
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
            disabled={isSubmitting}
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

      <Phenomenons data={data} setData={setData} />
    </div>
  );
};

export default AllPhenomenons;
