import React from "react";
import Territoires from "../Components/Territoires";
import Phenomenon from "../Components/Phenomenon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import "./FormCard.css";

const FormCard = () => {
  return (
    <div className="wrapper">
      <Phenomenon />
      {/* <Territoires /> */}

      <div className="card-footer">
        <div
          className="button"
          onClick={() => {
            alert("Etape précédente");
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <div>Etape précédente</div>
        </div>

        <div
          className="button"
          onClick={() => {
            alert("Enregistrer la fiche ?");
          }}
        >
          <FontAwesomeIcon icon={faSave} />
          <div>Enregistrer la fiche</div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
