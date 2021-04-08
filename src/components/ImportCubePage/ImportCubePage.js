import React from "react";
import ImportCube from "../ImportCube/ImportCube"

function ImportCubePage() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>Import Cube</h3>
      </div>

      <ImportCube />
    </div>
  );
}

export default ImportCubePage;
