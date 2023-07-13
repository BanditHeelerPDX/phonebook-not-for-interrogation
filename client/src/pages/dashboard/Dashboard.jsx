import "./dashboard.css";
import Header from "../../components/header/Header";
import SideLeft from "../../components/sideLeft/SideLeft";
import SideRight from "../../components/sideRight/SideRight";
import Timeline from "../../components/timeline/Timeline";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="dashboardShroud">
        <SideRight />
        <div className="dashboardRight">
          <div className="dashboardRightAbove">
            <div className="dashboardCloak">
            <img src={user.coverImage} alt="" className="dashboardCoverImage" />
            <img src={user.profileImage} alt="" className="dashboardProfileImage" />
            </div>
            <div className="dashboardDeets">
              <h3 className="dashboardDeetsName">{user.userName}</h3>
              <span className="dashboardDeetsDeets"></span>
            </div>
          </div>
          <div className="dashboardRightBelow">
            <SideLeft dashboard/>
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}
