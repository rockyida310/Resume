import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Programming Language</li>
          <li className="sidebarListItem">Data Structures</li>
          <li className="sidebarListItem">Algorithm</li>
          <li className="sidebarListItem">Problem Solving</li>
          <li className="sidebarListItem">Competetive Coding</li>
          <li className="sidebarListItem">Web Development</li>
          <li className="sidebarListItem">Mathematics</li>
          <li className="sidebarListItem">Puzzles</li>
          <li className="sidebarListItem">Aptitude</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum
          molestiae! Libero quam iusto neque et, ipsum quasi modi quidem quod
          suscipit officiis? Placeat, maxime dolorem eos quam esse ea.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
