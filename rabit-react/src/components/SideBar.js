import React from "react";
import "./sidebar.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const SideBar = () => {
  return (
    <div className="sidebar bg-dark">
      <div className="images">logo</div>
      <ul className="sidebar__items">
        <li className="items__data">
          <DropdownButton id="dropdown-basic-button" variant="outline-secondary" className="d-grid gap-2" size="lg"title="Home" >
            <Dropdown.Item href="#/action-1">Add</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Get</Dropdown.Item>

          </DropdownButton>
        </li>
      
        
      </ul>
    </div>
  );
};

export default SideBar;
