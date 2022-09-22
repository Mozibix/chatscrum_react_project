import React from "react";
import { Link } from "react-router-dom";
import './home.css';

export default function Home() {
  return (
    <div>  
      <h1>WELCOME TO CHATSCRUM</h1>
      <div className="links">
        <h4>
          <Link to="/signup">SIGN UP</Link>
        </h4>
        <h4>
          <Link to="/signin">SIGN IN</Link>
        </h4>
      </div>
    </div>
  );
}
