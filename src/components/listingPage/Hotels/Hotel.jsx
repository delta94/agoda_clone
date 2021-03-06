import React from "react";
import Perk from "./Perk.jsx";
import BestsellerFlag from "./BestsellerFlag.jsx";
import { Link } from 'react-router-dom';

var Hotel = props => {
  return (
    <Link to={`/listingPage/${props.hotel[0]}`} style={{ textDecoration: 'none' }}>
      <li className="hotel">
        <img
          src="https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg"
          alt="hotel main entrance"
          className="hotel__image"
        />
        <div className="hotel__text">
          <div className="hotel__header">
            <h3 className="hotel__name">{props.hotel[1]}</h3>
            <div className="row">
              <div className="col">
                <span className=" m-1 p-1 rounded font-weight-bolder">{props.hotel[3]} reviews</span>
              </div>
              <div className="col">
                <span className="hotel__rating">{props.hotel[2]}</span>

              </div>
            </div>
          </div>
          <div className="hotel__main">
            <div>
              <Perk
                perk="Free cancellation"
                hasPerk={props.hotel[7] === '1' ? true : false}
              />
              <Perk
                perk="Breakfast included"
                hasPerk={props.hotel[8] === '1' ? true : false}
              />
              <Perk perk="Onsite parking" hasPerk={props.hotel[9] === '1' ? true : false} />
              <Perk perk="Pet friendly building" hasPerk={props.hotel[10] === '1' ? true : false} />
              <Perk
                perk="Order food to your room"
                hasPerk={props.hotel[11] === '1' ? true : false}
              />
              <Perk
                perk="Fitness center access"
                hasPerk={props.hotel[12] === '1' ? true : false}
              />
            </div>
            <div className="hotel__main--right ">
              <span>
                <span className="hotel__price">Rs.{props.hotel[4]}</span>{" "}
              per night
            </span>
              <span>Includes taxes and charges</span>
            </div>
          </div>
        </div>
        <BestsellerFlag isBestseller={props.hotel[14] === '1' ? true : false} />
      </li>
    </Link>
  )
};

export default Hotel;