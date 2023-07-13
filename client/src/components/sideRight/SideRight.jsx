import "./sideRight.css"
import { BsFillMegaphoneFill, BsPersonHearts, BsCalendarEvent, BsImages, BsFire } from "react-icons/bs";

export default function SideRight() {
  return (
    <div className="sideRightShroud">
        <div className="rightCloak">
            <ul className="sideRightMenu">
              <li className="sideRightMenuItem">
                <BsFillMegaphoneFill className="sideRightIcon" />
                <span className="sideRightText">Who's Shouting?</span>
                </li>
                <li className="sideRightMenuItem">
                <BsPersonHearts className="sideRightIcon" />
                <span className="sideRightText">Where's my crew?</span>
                </li>
                <li className="sideRightMenuItem">
                <BsCalendarEvent className="sideRightIcon" />
                <span className="sideRightText">When's the party?</span>
                </li> 
                <li className="sideRightMenuItem">
                <BsImages className="sideRightIcon" />
                <span className="sideRightText">What happened?</span>
                </li>
                <li className="sideRightMenuItem">
                <BsFire className="sideRightIcon" />
                <span className="sideRightText">Why?</span>
                </li>  
            </ul>
            <button className="sideRightButton">You can't hide</button>
            <hr className="sideRightHr" />
            <ul className="sideRightFriends">
                  {User.map((u) => (
                    <Friends key={u.id} user={u} />
                  ))}              
            </ul>
        </div>
        </div>
  )
}
