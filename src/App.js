import React, { Component } from "react";
import "./App.css";
import Profile from "./Components/profile";
import Timer from "./Components/Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Emna Mhiri",
      bio: "Born in 1991",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135805.png",
      profession: "logisticienne",
      show: false,
    };
  }
  showProfile = () => {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  };
  render() {
    return (
      <div className="App">
        {this.state.show === true ? (
          <Profile
            fullName={this.state.fullName}
            desc={`${this.state.bio}, and she is a ${this.state.profession}`}
            profileImage={this.state.imageSrc}
          />
        ) : (
          " "
        )}

        <button onClick={this.showProfile}>
          {this.state.show ? "Hide Profil" : "show Profile"}
        </button>
        <div style={{ margenTop: "70 px" }}>
          <Timer />
        </div>
      </div>
    );
  }
}
export default App;
