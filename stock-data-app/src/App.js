import logo from "./logo.svg";
import React from "react";
import "./App.css";
import GioIns from "./GioInsert";
import Welcome from "./Welcome";
import Main from "./Main";
import LoginForm from "./LoginForm";
import Greetings from "./Greetings";
import ApiCallData from "./ApiCallData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "Giovanni",
      lastname: "Cardona",
      msValue: 100,
      twValue: 100,
      awsValue: 500,
      values: [
        { company: "Microsoft", value: 100 },
        { company: "Twitter", value: 200 },
        { company: "Amazon", value: 500 },
        { company: "Evermagica", value: 3500 },
      ],
      email: "giovanni_cardona@me.com",
      password: "password",
      isLoggedIn: false,
      stockData: []
    };
  }

  componentDidMount() {
    fetch("https://cloud.iexapis.com/stable/ref-data/market/us/exchanges?token=pk_896e38081b9845d7bf2ed64a0b51d772")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          stockData: response,
        })
      )
      //.then(response => console.log(response))
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

  increaseValues2() {
    this.setState((prevState) => ({
      values: [
        { company: "Microsoft", value: prevState.values[0].value + 1 },
        { company: "Twitter", value: prevState.values[1].value + 1 },
        { company: "Amazon", value: prevState.values[2].value + 1 },
        { company: "Evermagica", value: prevState.values[3].value + 1 },
      ],
    }));
  }

  decreaseValues2() {
    this.setState((prevState) => ({
      values: [
        { company: "Microsoft", value: prevState.values[0].value - 1 },
        { company: "Twitter", value: prevState.values[1].value - 1 },
        { company: "Amazon", value: prevState.values[2].value - 1 },
        { company: "Evermagica", value: prevState.values[3].value - 1 },
      ],
    }));
  }

  jumbleValues2() {
    this.setState((prevState) => ({
      values: [
        { company: "Microsoft", value: prevState.values[3].value },
        { company: "Twitter", value: prevState.values[0].value },
        { company: "Amazon", value: prevState.values[1].value },
        { company: "Evermagica", value: prevState.values[2].value },
      ],
    }));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.firstname);
    console.log(this.state.lastname);
  }

  handleFormUpdate(values) {
    console.log(values.email);
    console.log(values.password);
    this.setState({
      email: values.email,
      password: values.password,
      isLoggedIn: true
    });
  }

  render() {
    return (
      <div>
        <GioIns />
        <Welcome
          firstname={this.state.firstname}
          lastname={this.state.lastname}
        />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <Main
          values={this.state.values}
          msValue={this.state.msValue}
          twValue={this.state.twValue}
          awsValue={this.state.awsValue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
          jumble={this.jumbleValues.bind(this)}
          increase2={this.increaseValues2.bind(this)}
          decrease2={this.decreaseValues2.bind(this)}
          jumble2={this.jumbleValues2.bind(this)}
        />
        <LoginForm handleFormUpdate={this.handleFormUpdate.bind(this)} />
        {
          this.state.isLoggedIn ? 
          ( <div>
             <p>Thanks for loggin in!</p> 
             <ApiCallData stockData={this.state.stockData} />
            </div>):
          <p>Please log in</p>
        }
        {  /*
         this.state.stockData.map((items) => (
          <div key={items.mic}>
            <h3>{items.longName}</h3>
            <h4>This acronym is: {items.mic}</h4>
          </div>
        ))   */
        }
        
      </div>
    );
  }
}

export default App;
