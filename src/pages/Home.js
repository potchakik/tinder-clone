import React, { useState } from "react";
import { Navbar, AuthModal } from "../components";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignup] = useState(true);

  const authToken = false;

  const handleClick = () => {
    setShowModal(true);
    setIsSignup(true);
  };
  return (
    <div className="overlay">
      <Navbar
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignup={setIsSignup}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
      </div>
    </div>
  );
};

export default Home;
