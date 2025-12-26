import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./assets/firebase";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUsers = () => {
    createUserWithEmailAndPassword(auth, email, password+).then((value) =>
      alert("Success")
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      {" "}
      <div className="bg-amber-100 h-[300px] w-[300px] flex flex-col items-center gap-4 justify-center rounded-xl">
        <div className="flex flex-col">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pass">Passowrd</label>
          <input
            id="pass"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 p-1 rounded-md"
          />
        </div>
        <div>
          <button
            onClick={loginUsers}
            className="p-1 bg-gray-400 px-6 text-white rounded-md font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
