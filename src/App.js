import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import SignIn from "./Components/Sign-in/SignIn";
import SignUp from "./Components/Sign-Up/SignUp";
import Scrumboard from "./Components/Scrumboard/Scrumboard";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/scrumboard" element={<Scrumboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
