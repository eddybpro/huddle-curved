import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div className="Card-ImgBox">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="Card-TxtBox">
        <h2 className="Card-TxtBox-Title">{props.title}</h2>
        <p className="Card-TxtBox-Para">{props.desc}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
