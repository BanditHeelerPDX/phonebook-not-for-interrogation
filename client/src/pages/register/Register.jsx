import "./register.css";
import { CREATE_USER } from "../../utils/mutations";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";

export default function Register() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
  });
  const [createUser, { error, data }] = useMutation(CREATE_USER);
  const handleChange = (event) => {
    const { username, value } = event.target;
    setFormState({
      ...formState,
      [username]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    // if (formState.password !== formState.passwordAgain) {
    //   alert("Passwords do not match.");
    // } else {
      try {
        const { data } = await createUser({
          variables: { ...formState },
        });

        auth.login(data.createUser.token);
      } catch (e) {
        console.error(e);
      }
    };

  return (
    <div className="loginShroud">
      <div className="loginCloak">
        <div className="loginLeft">
          <h2 className="loginLogo">Phonebook</h2>
          <span className="loginInfo">Not good for interrogations.</span>
        </div>
        <div className="loginRight">
          <form className="loginBin" onSubmit={handleFormSubmit}>
            <input
              placeholder="Username"
              required
              value={formState.username}
              onChange={handleChange}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              value={formState.email}
              onChange={handleChange}
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              value={formState.password}
              onChange={handleChange}
              type="password"
              minLength="10"
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              required
              value={formState.passwordAgain}
              onChange={handleChange}
              type="password"
              className="loginInput"
            />
            <button type="submit" className="loginButton">Pick up the phonebook</button>
            <button className="loginRegisterButton">
              Already in the book?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
