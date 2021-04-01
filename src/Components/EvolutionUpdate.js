import React, { useState } from "react";
import { format } from "date-fns";
import { Button } from "react-bootstrap";

const EvolutionUpdate = ({
  data,
  setData,
  evolution,
  pheno,
  isEditing,
  setIsEditing,
}) => {
  const [apparitionDate, setApparitionDate] = useState("");
  const [unchangedDate, setUnchangedDate] = useState("");
  const [aggravationDate, setAggravationDate] = useState("");
  const [disappearedDate, setDisappearedDate] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  const [title4, setTitle4] = useState("");

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Apparition</span>

          <input
            disabled={isEditing ? "disabled" : ""}
            type={isEditing ? "text" : "date"}
            value={
              isEditing
                ? evolution.apparation
                  ? format(new Date(evolution.apparation), "dd/MM/yyyy")
                  : apparitionDate
                : apparitionDate
            }
            onChange={(event) => {
              setApparitionDate(event.target.value);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Inchangé</span>

          <input
            disabled={isEditing ? "disabled" : ""}
            type={isEditing ? "text" : "date"}
            value={
              isEditing
                ? evolution.unchanged
                  ? format(new Date(evolution.unchanged), "dd/MM/yyyy")
                  : ""
                : unchangedDate
            }
            onChange={(event) => {
              setUnchangedDate(event.target.value);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Title 1</span>
          <input
            disabled={isEditing ? "disabled" : ""}
            type="textarea"
            placeholder={evolution.title1}
            value={title1}
            onChange={(event) => {
              setTitle1(event.target.value);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Title 2</span>
          <input
            disabled={isEditing ? "disabled" : ""}
            type="textarea"
            placeholder={evolution.title2}
            value={title2}
            onChange={(event) => {
              setTitle2(event.target.value);
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Aggravation</span>
          <input
            disabled={isEditing ? "disabled" : ""}
            type={isEditing ? "text" : "date"}
            value={
              isEditing
                ? evolution.aggravation
                  ? format(new Date(evolution.aggravation), "dd/MM/yyyy")
                  : ""
                : aggravationDate
            }
            onChange={(event) => {
              setAggravationDate(event.target.value);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Disparition</span>
          <input
            disabled={isEditing ? "disabled" : ""}
            type={isEditing ? "text" : "date"}
            placeholder={
              evolution.disappear
                ? format(new Date(evolution.disappear), "dd/MM/yyyy")
                : ""
            }
            value={disappearedDate}
            onChange={(event) => {
              setDisappearedDate(event.target.value);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Title 3</span>
          <input
            disabled={isEditing ? "disabled" : ""}
            type="textarea"
            placeholder={evolution.title3}
            value={title3}
            onChange={(event) => {
              setTitle3(event.target.value);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Title 4</span>
          <input
            disabled={isEditing ? "disabled" : ""}
            type="textarea"
            placeholder={evolution.title4}
            value={title4}
            onChange={(event) => {
              setTitle4(event.target.value);
            }}
          />
        </div>
      </div>
      {!isEditing && (
        <Button onClick={() => setIsEditing(!isEditing)}>Sauvegarder</Button>
      )}
    </div>
  );

  // <div>
  //   <div>
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //       }}
  //     >
  //       <span>Apparition</span>
  //       {/* {evo.apparation ? format(new Date(evo.apparation), "dd/MM/yyyy") : ""} */}
  //       <input
  //         disabled={isEditing ? "disabled" : ""}
  //         type="date"
  //         value={apparitionDate}
  //         onChange={(event) => {
  //           setApparitionDate(event.target.value);
  //         }}
  //       />
  //     </div>

  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //       }}
  //     >
  //       <span>Inchangé</span>
  //       {/* {evo.unchanged ? format(new Date(evo.unchanged), "dd/MM/yyyy") : ""} */}
  //       <input
  //         disabled={isEditing ? "disabled" : ""}
  //         type="date"
  //         value={unchangedDate}
  //         onChange={(event) => {
  //           setUnchangedDate(event.target.value);
  //         }}
  //       />
  //     </div>

  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //       }}
  //     >
  //       <span>Title 1</span>
  //       {/* {evo.title1} */}
  //       <input
  //         disabled={isEditing ? "disabled" : ""}
  //         type="textarea"
  //         value={title1}
  //         onChange={(event) => {
  //           setTitle1(event.target.value);
  //         }}
  //       />
  //     </div>

  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //       }}
  //     >
  //       <span>Title 2</span>
  //       {/* {evo.title2} */}
  //       <input
  //         disabled={isEditing ? "disabled" : ""}
  //         type="textarea"
  //         value={title2}
  //         onChange={(event) => {
  //           setTitle2(event.target.value);
  //         }}
  //       />
  //     </div>

  //     <div style={{ marginBottom: 20 }}>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <span>Aggravation</span>
  //         {/* {evo.aggravation
  //         ? format(new Date(evo.aggravation), "dd/MM/yyyy")
  //         : ""} */}
  //         <input
  //           disabled={isEditing ? "disabled" : ""}
  //           type="date"
  //           value={aggravationDate}
  //           onChange={(event) => {
  //             setAggravationDate(event.target.value);
  //           }}
  //         />
  //       </div>

  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <span>Disparition</span>
  //         {/* {evo.disappear ? format(new Date(evo.disappear), "dd/MM/yyyy") : ""} */}
  //         <input
  //           disabled={isEditing ? "disabled" : ""}
  //           type="date"
  //           value={disappearedDate}
  //           onChange={(event) => {
  //             setDisappearedDate(event.target.value);
  //           }}
  //         />
  //       </div>

  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <span>Title 3</span>
  //         {/* {evo.title3} */}
  //         <input
  //           disabled={isEditing ? "disabled" : ""}
  //           type="textarea"
  //           value={title3}
  //           onChange={(event) => {
  //             setTitle3(event.target.value);
  //           }}
  //         />
  //       </div>

  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <span>Title 4</span>
  //         {/* {evo.title4} */}
  //         <input
  //           disabled={isEditing ? "disabled" : ""}
  //           type="textarea"
  //           value={title4}
  //           onChange={(event) => {
  //             setTitle4(event.target.value);
  //           }}
  //         />
  //       </div>
  //     </div>
  //   </div>

  // </div>
};

export default EvolutionUpdate;
