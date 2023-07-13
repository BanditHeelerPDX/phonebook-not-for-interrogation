import "./distribute.css";
import { BsFolderPlus } from "react-icons/bs";
import { RiEmojiStickerLine } from "react-icons/ri";
import { FaPeopleArrows, FaCanadianMapleLeaf } from "react-icons/fa";

export default function Distribute() {
  return (
    <div className="distributeShroud">
      <div className="distributeCloak">
        <div className="distributeAbove">
          <img src="/assets/viking.jpg" alt="" className="distributeProfImg" />
          <input placeholder="Shout it out, bruv!" className="distributeText" />
        </div>
        <hr className="distributeHr" />
        <div className="distributeBelow">
          <div className="distributeSelections">
            <div className="distributeSelection">
              <BsFolderPlus className="distributeSelectionIcon" />
              <span className="distributeSelectionText">Proof?</span>
            </div>
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
