import {
  BsSearchHeart,
  BsFillPersonFill,
  BsChatLeftQuoteFill,
  BsFillBellFill,
} from "react-icons/bs";
import "./header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="headerShroud">
      <div className="headerLeft">
      <Link to={`/dashboard/${user.username}`}>
      <img
        src={
          user.profilePicture
            ? PF + user.profileImage
            : PF + "person/noAvatar.png"
        }
        alt="viking warrior prepares for the playground"
        className="headerImg"
      />
      </Link>
        <div className="headerLinks">
          <span className="headerLink">Home</span>
          <span className="headerLink">Profile</span>
        </div>
        <div className="headerIcons">
          <div className="headerIcon">
            <BsFillPersonFill />
            <span className="headerIconFlag">1</span>
          </div>
          <div className="headerIcon">
            <BsChatLeftQuoteFill />
            <span className="headerIconFlag">3</span>
          </div>
          <div className="headerIcon">
            <BsFillBellFill />
            <span className="headerIconFlag">3</span>
          </div>
        </div>
      </div>
      <div className="headerCenter">
        <div className="searchBar">
          <BsSearchHeart className="searchIcon" />
          <input
            placeholder="What is shaking on the streets?"
            className="searchInput"
          />
        </div>
      </div>
      <div className="headerRight">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="headerLogo">Phonebook</span>
        </Link>
      </div>
    </div>
  );
}