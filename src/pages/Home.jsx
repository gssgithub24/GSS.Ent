import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      
      <ul>
        <li>
          <Link to="/rdparty">Rdparty</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
