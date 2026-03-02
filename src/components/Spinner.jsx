import React from "react";

const Spinner = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #ccc",
          borderTop: "4px solid #000",
          borderRadius: "50%",
          margin: "0 auto",
          animation: "spin 1s linear infinite",
        }}
      />

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;