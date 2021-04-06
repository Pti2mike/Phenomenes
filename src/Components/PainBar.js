import React from "react";
import { Form } from "react-bootstrap";

const PainBar = ({ form, pain, handleChange }) => {
  return (
    <div id="slidecontainer">
      {/* <div>
        <label>Douleur : </label>
      </div> */}

      <div style={{ display: "flex" }}>
        {/* <input
          type="range"
          className=""
          min="1"
          max="10"
          value={form.douleur ? form.douleur : pain}
          onChange={(e) => {
            handleChange(e, "douleur");
          }}
        /> */}
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
            style={{ width: 440, marginTop: 15 }}
            value={form.douleur ? form.douleur : pain}
            onChange={(e) => {
              handleChange(e, "douleur");
            }}
          />
        </Form.Group>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <i id="douleur"></i>
          {form.douleur ? form.douleur : pain}/10
        </div>
      </div>
    </div>
  );
};

export default PainBar;
