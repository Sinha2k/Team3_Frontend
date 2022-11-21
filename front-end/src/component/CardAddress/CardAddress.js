import React from "react";
import CardAddressStyle from "./style";

function CardAddress(cardAddress, infor) {
  return (
    <CardAddressStyle>
      <div className="infor">
        <div className="name">
          {cardAddress.infor.name},{cardAddress.infor.phone},
          {console.log(cardAddress)}
        </div>
        <div className="addre">{cardAddress.cardAddress}</div>
      </div>
    </CardAddressStyle>
  );
}

export default CardAddress;
