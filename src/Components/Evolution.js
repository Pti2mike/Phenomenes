import React from "react";

const Evolution = ({
  appartionDate,
  setAppartionDate,
  unchangedDate,
  setUnchangedDate,
  aggravationDate,
  setAggravationDate,
  disappearedDate,
  setDisappearedDate,
  title1,
  setTitle1,
  title2,
  setTitle2,
  title3,
  setTitle3,
  title4,
  setTitle4,
}) => {
  return (
    <div
      style={{
        border: "green solid",

        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
      }}
    >
      {/* <h3>Evolution</h3> */}
      <form style={{ marginBottom: 30 }}>
        {/* 1er bloc */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Apparition</span>
            <input
              type="date"
              value={appartionDate}
              onChange={(event) => {
                // console.log("Date selectionnée");
                setAppartionDate(event.target.value);
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

        {/* 2ème bloc */}
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
        </div>
      </form>
    </div>
  );
};

export default Evolution;
