import "./register.css";
import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
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
          <form className="loginBin" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              type="password"
              minLength="10"
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Pick up the phonebook</button>
            <button className="loginRegisterButton" type="submit">
              Already in the book?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
