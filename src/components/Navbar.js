import React from "react";
import logo from "./images/logotinder.jpg";

const Navbar = ({ minimal, setShowModal, showModal, setIsSignup }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignup(false);
  };

  const authToken = true;
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" style={{ width: 100 }} />
      </div>

      {!authToken && !minimal && (
        <button
          onClick={handleClick}
          className="nav-button"
          disabled={showModal}
        >
          {" "}
          Log in{" "}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
