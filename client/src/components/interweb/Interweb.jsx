import "./interweb.css"

export default function Interweb({ user }) {
  return (
    <li className="sideLeftIA">
              <div className="sideLeftProfImgShroud">
                <img src={user.profilePicture} alt="" className="sideLeftProfImg" />
                <span className="sideLeftInterweb"></span>
              </div>
              <span className="sideLeftIAName">{user.userName}</span>
            </li>
  )
}
