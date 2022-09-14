import React from "react";
import "./App.css";
import SignIn from "./Components/Sign-in/SignIn";
import SignUp from "./Components/Sign-Up/SignUp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>CHATSCRUM</h1>

        <SignUp />
        {/* <SignIn /> */}
      </div>
    );
  }
}

export default App;
