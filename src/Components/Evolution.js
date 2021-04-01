import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Evolution = ({ data, setData, evolution, pheno }) => {
  const [apparitionDate, setApparitionDate] = useState("");
  const [unchangedDate, setUnchangedDate] = useState("");
  const [aggravationDate, setAggravationDate] = useState("");
  const [disappearedDate, setDisappearedDate] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  const [title4, setTitle4] = useState("");

  // Soumettre les modifications d'une évolution
  const handleSubmit = async () => {
    if (
      apparitionDate !== "" ||
      unchangedDate !== "" ||
      aggravationDate !== "" ||
      disappearedDate !== "" ||
      title1 !== "" ||
      title2 !== "" ||
      title3 !== "" ||
      title4 !== ""
    ) {
      const response = await axios.post(
        // `http://localhost:3000/add-evolution/${selectedID}`,
        `http://localhost:3000/add-evolution/${evolution._id}`,
        {
          apparitionDate,
          unchangedDate,
          aggravationDate,
          disappearedDate,
          title1,
          title2,
          title3,
          title4,
        }
      );
      // setData(response.data.resultat);
      setData([
        ...data.map((row) => {
          // if (row._id === selectedID) {
          if (row._id === evolution._id) {
            row.evolutions.push(response.data.resultat);
          }
          return row;
        }),
      ]);
      setApparitionDate("");
      setUnchangedDate("");
      setAggravationDate("");
      setDisappearedDate("");
      setTitle1("");
      setTitle2("");
      setTitle3("");
      setTitle4("");
      // handleClose();
    } else {
      alert("Merci de remplir un champ");
    }
  };

  // Modifier une evolution d'un form

  const updateEvolution = async (idForm, idEvolution) => {
    console.log(`evoToDelete ${idForm} ${idEvolution}`); // on récupère l'id du form et l'id de l'evolution concernés

    const response = await axios.put(
      `http://localhost:3000/form/${idForm}/update-evolution/${idEvolution}`,
      {
        apparitionDate,
        unchangedDate,
        aggravationDate,
        disappearedDate,
        title1,
        title2,
        title3,
        title4,
      }
    );

    // console.log(response);

    setData(
      data.map((pheno) => {
        if (pheno._id === idForm) {
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
  };

  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
      }}
    >
      <h3>Evolution</h3>
      <form style={{ marginBottom: 30 }}>
        {/* 1er bloc */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Apparition</span>
            <input
              type="date"
              value={apparitionDate}
              onChange={(event) => {
                // console.log("Date selectionnée");
                setApparitionDate(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Inchangé</span>
            <input
              type="date"
              value={unchangedDate}
              onChange={(event) => {
                setUnchangedDate(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Title 1</span>
            <input
              type="textarea"
              value={title1}
              onChange={(event) => {
                setTitle1(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Title 2</span>
            <input
              type="textarea"
              value={title2}
              onChange={(event) => {
                setTitle2(event.target.value);
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Aggravation</span>
            <input
              type="date"
              value={aggravationDate}
              onChange={(event) => {
                setAggravationDate(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Disparition</span>
            <input
              type="date"
              value={disappearedDate}
              onChange={(event) => {
                setDisappearedDate(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Title 3</span>
            <input
              type="textarea"
              value={title3}
              onChange={(event) => {
                setTitle3(event.target.value);
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Title 4</span>
            <input
              type="textarea"
              value={title4}
              onChange={(event) => {
                setTitle4(event.target.value);
              }}
            />
          </div>
          <Button onSubmit={handleSubmit}>Sauvegarder</Button>
        </div>
      </form>
    </div>
  );
};

export default Evolution;
