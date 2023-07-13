import "./contribute.css";
import {
  BsFillGrid3X3GapFill,
  BsHandThumbsUpFill,
  BsHeartFill,
  BsJoystick,
} from "react-icons/bs";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function Contribute({ post }) {const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
    return (
    <div className="contributeShroud">
      <div className="contributeCloak">
        <div className="contributeAbove">
          <div className="contributeAboveLeft">
            <BsFillGrid3X3GapFill className="contributeIcon" />
          </div>
          <div className="contributeAboveRight">
            <span className="contributeUsername">{user.username}</span>
            <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profileImage
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="contributeProfImg"
            />
            </Link>
            <span className="contributeDate">{format(post.createdAt)}</span>
          </div>
        </div>
        <div className="contributeMiddle">
          <span className="contributeText">{post?.postText}</span>
          <img src={PF + post.img} alt="" className="contributeImg" />
        </div>
        <div className="contributeBelow">
          <div className="contributeBelowRight">
            <div className="contributeSelections">
              <div className="contributeSelection">
                <BsHandThumbsUpFill onClick={likeHandler} className="contributeSelectionIcon" />
                <span className="contributeSelectionText">Good</span>
              </div>
              <div className="contributeSelection">
                <BsHeartFill onClick={likeHandler} className="contributeSelectionIcon" />
                <span className="contributeSelectionText">Better</span>
              </div>
              <div className="contributeSelection">
                <BsJoystick onClick={likeHandler} className="contributeSelectionIcon" />
                <span className="contributeSelectionText">Best</span>
              </div>
            </div>
            <span className="contributeLikeCount">{like} people fanned your ego</span>
          </div>
          <div className="contributeBelowLeft">
            <span className="contributeCommentsCount">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
