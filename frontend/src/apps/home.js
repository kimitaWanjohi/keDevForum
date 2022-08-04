import React from "react";

const Home = () => {
  const clickedMessage = () => {
    alert("Authontication page");
  };
  return (
    <div className="welcome">
      <div className="navgator">
        <button type="button" onClick={clickedMessage} className="btm">
          LOGIN
        </button>
        <button type="button" onClick={clickedMessage} className="btm">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Home;
