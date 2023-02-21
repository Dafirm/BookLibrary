import React from "react";
import Navbar from "../../pages/Navbar/Navbar";
import SearchForm from "../SearchedForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Every business has an origin story worth telling, and usually, one
            that justifies why you even do business and have clients. Some
            centennial enterprises have pages of content that can fit in this
            section, while startups can tell the story of how the company was
            born, its challenges, and its vision for the future.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
