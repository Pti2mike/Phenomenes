import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const ReadEvolution = ({ forms, id }) => {
  const [info, setInfo] = useState();

  useEffect(() => {
    if (forms) {
      for (let index = 0; index < forms.length; index++) {
        console.log(forms[index]);
        if (forms[index]._id === id) {
          setInfo(forms[index]);
        }
      }
    }
  }, [forms, id]);

  return (
    <div
      style={{
        border: "green solid",
        width: 700,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
      }}
    >
      <h3>Evolution</h3>
      {info && (
        <form style={{ marginBottom: 30 }}>
          {/* 1er bloc */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Apparition</span>
              <input
                type="date"
                value={
                  info.evolution.apparation
                    ? format(new Date(info.evolution.apparation), "yyyy-MM-dd")
                    : ""
                }
                disabled
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Inchangé</span>
              <input
                type="date"
                value={
                  info.evolution.unchanged
                    ? format(new Date(info.evolution.unchanged), "yyyy-MM-dd")
                    : ""
                }
                disabled
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Title 1</span>
              <input type="textarea" value={info.evolution.title1} disabled />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Title 2</span>
              <input type="textarea" value={info.evolution.title2} disabled />
            </div>
          </div>

          {/* 2ème bloc */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Aggravation</span>
              <input
                type="date"
                value={
                  info.evolution.aggravation
                    ? format(new Date(info.evolution.aggravation), "yyyy-MM-dd")
                    : ""
                }
                disabled
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Disparition</span>
              <input
                type="date"
                value={
                  info.evolution.disappear
                    ? format(new Date(info.evolution.disappear), "yyyy-MM-dd")
                    : ""
                }
                disabled
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Title 3</span>
              <input type="textarea" value={info.evolution.title3} disabled />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Title 4</span>
              <input type="textarea" value={info.evolution.title4} disabled />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReadEvolution;
