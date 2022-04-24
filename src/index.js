import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Container from "./Container/container";
function Index() {
  return (
    <div>
      <Container />
    </div>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
