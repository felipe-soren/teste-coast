import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaPlus, FaCheck, FaFolder } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import history from "../../history";

import { Context } from "../../Context/AuthContext";

import { Container, ProfileImage } from "./styles";

function Menu() {
  const [showHiddedMenu, setShowHiddedMenu] = useState(false);

  const { handleLogout } = useContext(Context);

  return (
    <Container>
      <div
        className="profile-container"
        onMouseEnter={() => setShowHiddedMenu(true)}
      >
        <ProfileImage src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        {showHiddedMenu && (
          <div
            className="hidded-options"
            onMouseLeave={() => setShowHiddedMenu(false)}
          >
            <img
              src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="profile"
            />
            <ul>
              <li>
                <button onClick={() => history.push("/account")}>
                  <BsGearFill style={{ marginRight: "15px" }} />
                  Settings
                </button>
              </li>
              <li>
                <button onClick={() => handleLogout()}>
                  <ImExit style={{ marginRight: "15px" }} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <ul className="options">
        <li className="option">
          <NavLink to="/home">
            <AiOutlineDashboard size={35} />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="option">
          <NavLink to="/create-ar">
            <FaPlus size={35} />
            <span>Create AR</span>
          </NavLink>
        </li>
        <li className="option">
          <NavLink to="/uploaded-ar">
            <FaCheck size={35} />
            <span>Uploaded AR</span>
          </NavLink>
        </li>
        <li className="option">
          <NavLink to="/folders">
            <FaFolder size={35} />
            <span>Folders</span>
          </NavLink>
        </li>
        <li className="option">
          <button onClick={() => handleLogout()}>
            <ImExit size={35} />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </Container>
  );
}

export default Menu;
