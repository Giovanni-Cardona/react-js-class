import logo from "./logo.svg";
import React from "react";
import "./App.css";
import GioIns from "./GioInsert";
import Welcome from "./Welcome";
import Main from "./Main";
import Greetings from "./Greetings";

class Appcopy1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cardona",
      msValue: 100,
      twValue: 100,
      awsValue: 500
    };
  }

  increaseValues() {
    this.setState((prevState) => ({
      msValue: prevState.msValue + 1,
      twValue: prevState.twValue + 1,
      awsValue: prevState.awsValue + 1,
    }));
  }

  decreaseValues() {
    this.setState((prevState) => ({
      msValue: prevState.msValue - 1,
      twValue: prevState.twValue - 1,
      awsValue: prevState.awsValue - 1,
    }));
  }

  jumbleValues() {
    this.setState((prevState) => ({
      msValue: prevState.awsValue,
      twValue: prevState.msValue,
      awsValue: prevState.twValue,
    }));
  }

  render() {
    return (
      <div>
        <GioIns />
        <Welcome name={this.state.name} />
        <Main
          msValue={this.state.msValue}
          twValue={this.state.twValue}
          awsValue={this.state.awsValue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
          jumble={this.jumbleValues.bind(this)}
        />
      </div>
    );
  }
}

export default Appcopy1;
