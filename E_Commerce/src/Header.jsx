import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-black text-white justify-evenly flex  p-1">
      <div className="flex  justify-start space-x-20">
        <Link to="/">Home</Link>
        <Link to="contact">Contact</Link>
        <Link to="about">About</Link>
      </div>
      <div>
        <input
          type="tex"
          placeholder="Search item"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="bg-gray-700 rounded-xl pl-2"
        />
      </div>
      <div className=" justify-center  ">
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
