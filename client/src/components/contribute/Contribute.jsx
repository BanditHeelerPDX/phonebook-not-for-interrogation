import "./contribute.css";
import {
  BsFillGrid3X3GapFill,
  BsHandThumbsUpFill,
  BsHeartFill,
  BsJoystick,
} from "react-icons/bs";

export default function Contribute({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
    return (
    <div className="contributeShroud">
      <div className="contributeCloak">
        <div className="contributeAbove">
          <div className="contributeAboveLeft">
            <BsFillGrid3X3GapFill className="contributeIcon" />
          </div>
          <div className="contributeAboveRight">
            <span className="contributeUsername">{Users.filter((u) => u.id === post.userId)[0].userName}</span>
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="contributeProfImg"
            />
            <span className="contributeDate">{post.date}</span>
          </div>
        </div>
        <div className="contributeMiddle">
          <span className="contributeText">{post?.postText}</span>
          <img src="{post.postImage}" alt="" className="contributeImg" />
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
            <span className="contributeCommentsCount">6 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
