import "./friends.css"

export default function Friends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sideRightFriend">
                   <img src={PF+user.profileImage} alt="" className="sideRightFriendImg" />
                     <span className="sideRightFriendName">{user.userName}</span>
                </li>
  )
}
