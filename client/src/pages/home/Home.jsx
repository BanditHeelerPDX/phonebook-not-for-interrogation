import Header from "../../components/header/Header";
import SideLeft from "../../components/sideLeft/SideLeft";
import SideRight from "../../components/sideRight/SideRight";
import Timeline from "../../components/timeline/Timeline";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homeShroud">
        <Timeline />
        <SideLeft />
        <SideRight />
      </div>
    </>
  );
}
