import React from "react";
import {Link} from "react-router-dom"
import "./Startpage.css";

const Startpage = () => {
  return (
    <>
      <div className="container">
        <div>
          <img
            className="start-avatar"
            src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg"
            alt="start page avatar"
          />
        </div>
        <div>
          <h1>IQ Test for kids from 7 to 16 year old</h1>
        </div>
        <div>
          <Link to="/questions">
          <button className="get-started">
            <h2>Get started</h2>
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Startpage;
