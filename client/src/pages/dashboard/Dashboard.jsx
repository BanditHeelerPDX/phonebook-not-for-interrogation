import "./dashboard.css";
import Header from "../../components/header/Header";
import SideLeft from "../../components/sideLeft/SideLeft";
import SideRight from "../../components/sideRight/SideRight";
import Timeline from "../../components/timeline/Timeline";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Header />
      <div className="dashboardShroud">
        <SideRight />
        <div className="dashboardRight">
          <div className="dashboardRightAbove">
            <div className="dashboardCloak">
            <img src={user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"} alt="" className="dashboardCoverImage" />
            <img src={user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"} alt="" className="dashboardProfileImage" />
            </div>
            <div className="dashboardDeets">
              <h3 className="dashboardDeetsName">{user.username}</h3>
              <span className="dashboardDeetsDeets">{user.desc}</span>
            </div>
          </div>
          <div className="dashboardRightBelow">
            <SideLeft user={user} />
            <Timeline username={username} />
          </div>
        </div>
      </div>
    </>
  );
}
