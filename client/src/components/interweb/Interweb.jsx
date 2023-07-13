import "./interweb.css"

export default function Interweb({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sideLeftIA">
              <div className="sideLeftProfImgShroud">
                <img src={PF+user.profilePicture} alt="" className="sideLeftProfImg" />
                <span className="sideLeftInterweb"></span>
              </div>
              <span className="sideLeftIAName">{user.userName}</span>
            </li>
  )
}
