import "./sideLeft.css"
import Calendar from "react-calendar"
import { Users } from "../../dummyData"
import Interweb from "../interweb/Interweb"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { BsFillPersonPlusFill, BsFillPersonDashFill } from "react-icons/bs"

export default function SideLeft({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };
  const HomeSideLeft = () => {
    return (
      <>
      <div className="sideLeftAbove">
          <div className="sideLeftCalendar">
            <Calendar />
          </div>
        </div>
        <div className="sideLeftMiddle">
          <h3 className="sideLeftIAHeader">Interweb Acquaintances</h3>
          <ul className="sideLeftIAList">
            {Users.map((u) => (
              <Interweb key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </>
    )
  };

  const DashboardSideLeft = () => {
    return (
      <>
      {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <BsFillPersonDashFill /> : <BsFillPersonPlusFill />}
          </button>
        )}
      <h3 className="sideLeftTitle">My deets</h3>
      <div className="sideLeftDeets">
        <div className="sideLeftDeet">
          <span className="sideLeftDeetKey">From:</span>
          <span className="sideLeftDeetValue">{user.from}</span>
        </div>
        <div className="sideLeftDeet">
          <span className="sideLeftDeetKey">City:</span>
          <span className="sideLeftDeetValue">{user.city}</span>
        </div>
        <div className="sideLeftDeet">
          <span className="sideLeftDeetKey">Dream:</span>
          <span className="sideLeftDeetValue">{user.dream}</span>
        </div>
      </div>
      <h3 className="sideLeftTitle">My peeps</h3>
      <div className="sideLeftPeeps">
      {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profileImage
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  }
  return (
    <div className="sideLeftShroud">
      <div className="sideLeftCloak">
        {user ? <DashboardSideLeft /> : <HomeSideLeft />}
      </div>
    </div>
  )
}
