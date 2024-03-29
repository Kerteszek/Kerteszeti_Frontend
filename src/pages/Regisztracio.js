import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "../api/axios";

export default function Regisztracion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await csrf();

    try {
      const adat = {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,

      };
      console.log(adat);
      await axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,

      });

      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");

      navigate("/");
      console.log("Regisztráció megtörtént!");
    } catch (e) {
      //console.log(e.response.status);
      console.log(password);
      console.log(password_confirmation)
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      console.log(e);
    }
  };

  return (
    <div className=" m-auto" style={{ maxWidth: "400px" }}>
        <h1 className="text-center">Regisztráció</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">
                    Név:
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="form-control"
                    id="name"
                    placeholder="Név"
                    name="name"
                />
                <div>
                    {errors.name && (
                        <span className="text-danger">
                            {errors.name[0]}
                        </span>
                    )}
                </div>
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                    Email:
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="form-control"
                    id="email"
                    placeholder="email"
                    name="email"
                />
                <div>
                    {errors.email && (
                        <span className="text-danger">
                            {errors.email[0]}
                        </span>
                    )}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                    Jelszó:
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    className="form-control"
                    id="pwd"
                    placeholder="jelszó"
                    name="pwd"
                />
                <div>
                    {errors.password && (
                        <span className="text-danger">
                            {errors.password[0]}
                        </span>
                    )}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="pwdujra" className="form-label">
                    Jelszó újra:
                </label>
                <input
                    type="password"
                    value={password_confirmation}
                    onChange={(e) => {
                        setPasswordConfirmation(e.target.value);
                    }}
                    className="form-control"
                    id="pwdujra"
                    placeholder="jelszó újra"
                    name="pwdujra"
                />
                <div>
                    {errors.password_confirmation && (
                        <span className="text-danger">
                            {errors.password_confirmation[0]}
                        </span>
                    )}
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Regisztrálok
            </button>
        </form>
    </div>
);
}
