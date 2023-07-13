import "./friends.css"

export default function Friends({ user }) {
  return (
    <li className="sideRightFriend">
                   <img src={user.profilePicture} alt="" className="sideRightFriendImg" />
                     <span className="sideRightFriendName">{user.userName}</span>
                </li>
  )
}
