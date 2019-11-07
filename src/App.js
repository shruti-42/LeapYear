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
          <input type="button" value="Click Me!" className="btn-submit" />
        </form>
      </div>
    );
  }
}

export default App;
