import "./login.css"

export default function Login() {
  return (
    <div className="loginShroud">
        <div className="loginCloak">
            <div className="loginLeft">
                <h2 className="loginLogo">Phonebook</h2>
                <span className="loginInfo">Not good for interrogations.</span>
            </div>
            <div className="loginRight">
                <div className="loginBin">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Pick up the phonebook</button>
                    <span className="loginLost">Lost your login?</span>
                    <button className="loginRegisterButton">Create Anew</button>
                </div>
            </div>
        </div>
    </div>
  )
}
