import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };
  }
  checkLeapYear = () => {
    const year = this.state.year;

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
      this.setState({
        msg: year + " is a Leap Year!!!"
      });
    } else {
      this.setState({
        msg: year + " is not a Leap Year!!!"
      });
    }
  };
  setYear = e => {
    this.setState({
      year: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <form className="leapYear">
          <p className="leapHeading">Leap Years</p>
          <span>Input Year: </span>
          <input type="text" id="year" onChange={this.setYear} />
          <input
            type="button"
            value="Click Me!"
            className="btn-submit"
            onClick={this.checkLeapYear}
          />
          <p className="message">{this.state.msg || " "}</p>
        </form>
      </div>
    );
  }
}

export default App;
