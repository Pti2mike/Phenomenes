import React from "react";
import AllPhenomenons from "../Components/AllPhenomenons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import "./ContentCard.css";

const PhenomenonCard = () => {
  return (
    <div className="wrapper">
      <AllPhenomenons />

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

export default PhenomenonCard;
