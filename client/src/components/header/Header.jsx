import {
  BsSearchHeart,
  BsFillPersonFill,
  BsChatLeftQuoteFill,
  BsFillBellFill,
} from "react-icons/bs";
import "./header.css";

export default function Header() {
  return (
    <div className="headerShroud">
      <div className="headerLeft">
      <img
        src="/assets/viking.jpg"
        alt="viking warrior prepares for the playground"
        className="headerImg"
      />
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
        <span className="headerLogo">Phonebook</span>
      </div>
    </div>
  );
}