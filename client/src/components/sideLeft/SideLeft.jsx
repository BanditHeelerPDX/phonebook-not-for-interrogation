import "./sideLeft.css"
import Calendar from "react-calendar"

export default function SideLeft({ dashboard }) {
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
      <h3 className="sideLeftTitle">My deets</h3>
      <div className="sideLeftDeets">
        <div className="sideLeftDeet">
          <span className="sideLeftDeetKey">From:</span>
          <span className="sideLeftDeetValue">Colorado</span>
        </div>
        <div className="sideLeftDeet">
          <span className="sideLeftDeetKey">City:</span>
          <span className="sideLeftDeetValue">Portland</span>
        </div>
        <div className="sideLeftDeet">
          <span className="sideLeftDeetKey">Dream:</span>
          <span className="sideLeftDeetValue">County Cork</span>
        </div>
      </div>
      <h3 className="sideLeftTitle">My peeps</h3>
      <div className="sideLeftPeeps">
        <div className="sideLeftPeep">
          <img src={} alt="" className="sideLeftPeepImg" />
          <span className="sideLeftPeepName">John Doe</span>
        </div>
        </div>
      </>
    )
  }
  return (
    <div className="sideLeftShroud">
      <div className="sideLeftCloak">
        {profile ? <DashboardSideLeft /> : <HomeSideLeft />}
      </div>
    </div>
  )
}
