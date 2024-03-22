import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "../api/axios";

export default function Regisztracion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswConformation] = useState("");
  const navigate = useNavigate();

  const handleRegisztracio = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
        password_confirmation: password_confirmation,
      });

      setName();
      setEmail("");
      setPassword("");
      setPasswConformation("");

      navigate("/"); //főoldalra visz
      console.log("Regisztráció megtörtént!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="regisztracio m-auto" style={{ maxWidth: "400px" }}>
      <h1 className="text-center">Regisztráció</h1>
      <form onSubmit={handleRegisztracio}>
        {/* Név */}
        <div className="mb-3">
          <label htmlFor="nev" className="form-label">
            Név:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="nev"
            placeholder="Név"
            name="nev"
          />
          <div>
            <span className="text-danger">hiba</span>
          </div>
        </div>

        {/* Email */}
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="email"
            name="email"
          />
          <div>
            <span className="text-danger">hiba</span>
          </div>
        </div>

        {/* Jelszó */}
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Jelszó:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="pwd"
            placeholder="jelszó"
            name="pwd"
          />
          <div>
            <span className="text-danger">hiba</span>
          </div>
        </div>

        {/* Jelszó újra*/}
        <div className="mb-3">
          <label htmlFor="pwdujra" className="form-label">
            Jelszó újra:
          </label>
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswConformation(e.target.value)}
            className="form-control"
            id="pwdujra"
            placeholder="jelszó újra"
            name="pwdujra"
          />
          <div>
            <span className="text-danger">hiba</span>
          </div>
        </div>

        <div className=" text-center">
          <button type="submit" className="btn btn-primary w-100">
            Regisztráció
          </button>
        </div>
      </form>
    </div>
  );
}
