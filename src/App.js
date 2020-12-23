import React from "react";
import "./styles.css";

export default function App() {
  const showBox = true;

  return (
    <div>
      {showBox && <Box>1</Box>}
      <Box isVisible={showBox}>2</Box>
    </div>
  );
}

function Box({ children, isVisible = true }) {
  if (!isVisible) return null;

  const style = {
    backgroundColor: "pink",
    width: "100px",
    height: "100px",
    margin: "30px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    display: "flex"
    //display: isVisible ? "flex" : "none"
  };

  return <div style={style}>{children}</div>;
}
