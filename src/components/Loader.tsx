import React from "react";
import "../assets/css/loader.css";

function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
