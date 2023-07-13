import "./distribute.css";
import { BsFolderPlus, BsFillSignStopFill } from "react-icons/bs";
import { RiEmojiStickerLine } from "react-icons/ri";
import { FaPeopleArrows, FaCanadianMapleLeaf } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef, useState } from "react";

export default function Distribute() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="distributeShroud">
      <div className="distributeCloak">
        <div className="distributeAbove">
          <img
            src={
              user.profileImage
                ? PF + user.profileImage
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="distributeProfImg"
          />
          <input
            ref="desc"
            placeholder={"Shout it out " + user.username + "!"}
            className="distributeText"
          />
        </div>
        <hr className="distributeHr" />
        {file && (
          <div className="distributeImgContainer">
            <img
              className="distributeImg"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <BsFillSignStopFill
              className="distributeCancel"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <div className="distributeBelow">
          <div className="distributeSelections">
            <label htmlFor="file" className="distributeSelection">
              <BsFolderPlus className="distributeSelectionIcon" />
              <span className="distributeSelectionText">Proof?</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="distributeSelection">
              <RiEmojiStickerLine className="distributeSelectionIcon" />
              <span className="distributeSelectionText">How ya feelin?</span>
            </div>
            <div className="distributeSelection">
              <FaPeopleArrows className="distributeSelectionIcon" />
              <span className="distributeSelectionText">You're it!</span>
            </div>
            <div className="distributeSelection">
              <FaCanadianMapleLeaf className="distributeSelectionIcon" />
              <span className="distributeSelectionText">Canada, eh?</span>
            </div>
          </div>
          <button className="distributeButton">Sendit!</button>
        </div>
      </div>
    </div>
  );
}
