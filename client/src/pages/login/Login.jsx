import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="loginShroud">
      <div className="loginCloak">
        <div className="loginLeft">
          <h2 className="loginLogo">Phonebook</h2>
          <span className="loginInfo">Not good for interrogations.</span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBin">
            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              required
              ref={password}
              minLength="10"
              className="loginInput"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
            {isFetching ? (
                <CircularProgress color="white" size="32px" />
              ) : (
                "Pick up the phonebook"
              )}
            </button>
            <span className="loginLost">Lost your login?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="32px" />
              ) : (
                "Create Anew"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
