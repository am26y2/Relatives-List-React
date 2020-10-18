import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  relativeList = ["alok", "amit"];
  render() {
    return (
      <ol key={"relativeList"}>
        {this.relativeList.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    );
  }
}

export default App;
