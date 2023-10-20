import { ScreenMockUpImg, PeopleIcon, MessageIcon } from "../assets";
import { data } from "../data";
import Card from "./Card";
import "./MainCard.css";

function MainCard() {
  return (
    <main>
      <div className="FirstBox">
        <div className="FirstBox-ImgBox">
          <img src={ScreenMockUpImg} alt="" />
        </div>
        <div className="FirstBox-Container">
          <div>
            <img src={PeopleIcon} alt="" className="FirstBox-Container-Img" />
            <h1 className="FirstBox-Container-Title">1.4k+</h1>
            <p className="FirstBox-Container-Para">communities formed</p>
          </div>
          <div>
            <img src={MessageIcon} alt="" className="FirstBox-Container-Img" />
            <h1 className="FirstBox-Container-Title">2.7m+</h1>
            <p className="FirstBox-Container-Para">messages sent</p>
          </div>
        </div>
      </div>

      <div className="CardsContainer">
        {data.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>

      <div className="CommunityBox">
        <h1 className="CommunityBox-Title">ready to build your community?</h1>
        <button className="CommunityBox-Btn">get started for free</button>
      </div>
    </main>
  );
}
export default MainCard;
