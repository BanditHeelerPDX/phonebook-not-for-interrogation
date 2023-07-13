import "./register.css"

export default function Register() {
  return (
    <div className="loginShroud">
        <div className="loginCloak">
            <div className="loginLeft">
                <h2 className="loginLogo">Phonebook</h2>
                <span className="loginInfo">Not good for interrogations.</span>
            </div>
            <div className="loginRight">
                <div className="loginBin">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">Pick up the phonebook</button>
                    <button className="loginRegisterButton">Already in the book?</button>
                </div>
            </div>
        </div>
    </div>
  )
}
