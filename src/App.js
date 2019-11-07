import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <form className="leapYear">
          <p className="leapHeading">Leap Years</p>
          <span>Input Year: </span>
          <input type="text" id="year" />
        </form>
      </div>
    );
  }
}

export default App;
