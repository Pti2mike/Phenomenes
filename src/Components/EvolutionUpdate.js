import React, { useState } from "react";
import { format } from "date-fns";
import { Button } from "react-bootstrap";
import PainBar from "./PainBar";
import majorated from "../data/majorated.js";
import checkUp from "../data/checkUp.js";
import mobilities from "../data/mobilities";
import evolutions from "../data/evolutions";

const EvolutionUpdate = ({
  data,
  setData,
  evolution,
  pheno,
  isEditing,
  setIsEditing,
}) => {
  const [evolType, setEvolType] = useState(evolution.name || "");
  const [evolMajore, setEvolMajore] = useState(evolution.majorated || "");
  const [evolDate, setEvolDate] = useState(
    (evolution.date && format(new Date(evolution.date), "dd/MM/yyyy")) || ""
  );
  const [evolDouleur, setEvolDouleur] = useState(evolution.douleur || 1);
  const [evolMobility, setEvolMobility] = useState(evolution.mobility || "");
  const [evolCheckUp, setEvolCheckUp] = useState(evolution.checkUp || "");
  const [evolPrecision, setEvolPrecision] = useState(evolution.precision || "");

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <form>
          <div>Evolutions :</div>
          <select
            disabled={isEditing ? "disabled" : ""}
            value={isEditing ? evolution.name : evolType}
            onChange={(event) => {
              setEvolType(event.target.value);
            }}
          >
            {evolutions.map((evo, index) => (
              <option key={index} value={evo}>
                {evo}
              </option>
            ))}
          </select>

          <div>Majoré par le mouvement :</div>
          <select
            disabled={isEditing ? "disabled" : ""}
            value={isEditing ? evolution.majorated : evolMajore}
            onChange={(event) => {
              setEvolMajore(event.target.value);
            }}
          >
            {majorated.map((major, index) => (
              <option key={index} value={major}>
                {major}
              </option>
            ))}
          </select>

          <div>
            <div>Date :</div>
            <input
              disabled={isEditing ? "disabled" : ""}
              type={isEditing ? "text" : "date"}
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
            />
          </div>

          {/* <div>
            <PainBar />
          </div> */}

          <div id="slidecontainer">
            <div>
              <label>Douleur : </label>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                disabled={isEditing ? "disabled" : ""}
                type="range"
                style={{ marginRight: 25 }}
                min="1"
                max="10"
                value={isEditing ? evolution.douleur : evolDouleur}
                onChange={(event) => {
                  setEvolDouleur(event.target.value);
                }}
              />
              <div>
                <i id="douleur"></i>
                {isEditing && evolution.douleur
                  ? evolution.douleur
                  : evolDouleur}
                /10
              </div>
            </div>
          </div>

          <div>Mobilité globale restreinte :</div>
          <select
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
          </select>

          <div>Bilan Médical :</div>

          <select
            disabled={isEditing ? "disabled" : ""}
            value={isEditing ? evolution.checkUp : evolCheckUp}
            onChange={(event) => {
              setEvolCheckUp(event.target.value);
            }}
          >
            {checkUp.map((check, index) => (
              <option key={index} value={check}>
                {check}
              </option>
            ))}
          </select>

          <div>
            <div>Précision :</div>
            <textarea
              disabled={isEditing ? "disabled" : ""}
              placeholder="Votre texte ici..."
              value={isEditing ? evolution.precision : evolPrecision}
              onChange={(event) => {
                setEvolPrecision(event.target.value);
              }}
            />
          </div>
        </form>
      </div>
      {!isEditing && (
        <Button onClick={() => setIsEditing(!isEditing)}>Sauvegarder</Button>
      )}
    </div>
  );
};

export default EvolutionUpdate;
