import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      liveColo: "",
      conditions: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checked"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  handleSubmit(event) {
    alert("Thank You, Have A Nice Day!");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit="handleSubmit">
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <h2>
            {this.state.firstName} {this.state.lastName}
          </h2>
          <h2>Do You Live in Colorado?</h2>
          <label>
            <input
              type="radio"
              name="liveColo"
              value="Yes"
              checked={this.state.liveColo === "Yes"}
              onChange={this.handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="liveColo"
              value="No"
              checked={this.state.liveColo === "No"}
              onChange={this.handleChange}
            />
            No
          </label>

          <div>
            <h2>Do You Have Any Medical Conditions/Allergies?</h2>
            <label>
              <input
                type="radio"
                name="conditions"
                value="Yes"
                checked={this.state.conditions === "Yes"}
                onChange={this.handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="conditions"
                value="No"
                checked={this.state.conditions === "No"}
                onChange={this.handleChange}
              />
              No
            </label>
          </div>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
