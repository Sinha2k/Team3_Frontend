import { Col, Row } from "antd";
import React from "react";
import Orderstyle from "./OrderStyle";

function Order({ orderData, no }) {
  return (
    <Orderstyle>
      <div className="row1">
        <Row>
          <Col span={2}>
            <div className="t1 no">{no}</div>
          </Col>
          <Col span={8}>
            <div className="t1 name1">
              <img src={orderData.img} />
              <div>{orderData.name}</div>
            </div>
          </Col>
          <Col span={3}>
            <div className="t1 quantity1">{orderData.quantity}</div>
          </Col>
          <Col span={4}>
            <div className="t1 price1">{orderData.price}</div>
          </Col>
          <Col span={3}>
            <div className="t1 discount1">{orderData.discount}</div>
          </Col>
          <div className="c1">
            <Col span={4}>
              <div className="t1 total1">
                {orderData.price * orderData.quantity +
                  (orderData.price * orderData.discount * orderData.quantity) /
                    100}
              </div>
            </Col>
          </div>
        </Row>
      </div>
      {console.log("aaaa1", orderData)}
    </Orderstyle>
  );
}

export default Order;
