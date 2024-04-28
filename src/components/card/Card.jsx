import { Link } from "react-router-dom";
import "./card.scss";

function CustomCard({ item }) {
  return (
    <div className="customCard">
      <Link to={`/${item.id}`} className="customImageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="customTextContainer">
        <h2 className="customTitle">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="customAddress">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="customPrice">$ {item.price}</p>
        <div className="customBottom">
          <div className="customFeatures">
            <div className="customFeature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="customFeature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="customIcons">
            <div className="customIcon">
              <img src="/save.png" alt="" />
            </div>
            <div className="customIcon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
