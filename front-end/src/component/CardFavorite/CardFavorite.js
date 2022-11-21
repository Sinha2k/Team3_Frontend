import React from "react";
import CardFavoriteStyle from "./style";

function CardFavorite(cardAddress, infor) {
  return (
    <CardFavoriteStyle>
      <div className="infor">
        <div className="name">
          {cardAddress.infor.name},{cardAddress.infor.phone},
          {console.log(cardAddress)}
        </div>
        <div className="addre">{cardAddress.cardAddress}</div>
      </div>
    </CardFavoriteStyle>
  );
}

export default CardAddress;
