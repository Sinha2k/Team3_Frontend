import React, { useState } from "react";
import "antd/dist/antd.css";
import ManageOrderStyle from "../../styled/ManageAcount/ManageOrder";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import UserAcountInfor from "../../data/UserAcountInfor";
import { Col, Row, Tabs } from "antd";
import NoOrder from "../../component/ManageOrder/NoOrder";
import { DeleteOutlined } from "@ant-design/icons";
import Order from "../../component/ManageOrder/Order";
import { DataOrder } from "../../data/DataOrder";

function ManageOrder() {
  const [btnActive, setBtnActive] = useState("nav-btn");

  // const columns = [
  //   {
  //     key: "name",
  //     title: "Name",
  //     dataIndex: "name",
  //   },
  //   {
  //     key: "quantity",
  //     title: "Quantity",
  //     dataIndex: "quantity",
  //   },
  //   {
  //     key: "price",
  //     title: "Price",
  //     dataIndex: "price",
  //   },
  //   {
  //     key: "discount",
  //     title: "Discount",
  //     dataIndex: "discount",
  //   },

  //   {
  //     key: "total",
  //     title: "Total",
  //     dataIndex: "total",
  //   },
  //   {
  //     key: "action",
  //     title: "Actions",
  //     render: (record) => {
  //       return (
  //         <>
  //           <DeleteOutlined
  //             style={{ color: "red" }}
  //             onClick={() => Delete(record)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

  return (
    <ManageOrderStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="right-top">
          <div className="n">
            <span className="num1">{UserAcountInfor[1].unpaidOrder}</span>
            <span className="num2">{UserAcountInfor[1].orderProcess}</span>
            <span className="num3">{UserAcountInfor[1].orderShipping}</span>
            <span className="num4">{UserAcountInfor[1].orderReceived}</span>
          </div>
          <div className="title">Quản lý đơn hàng</div>
          <div className="tabb">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Chờ thanh toán" key="1">
                {DataOrder.length !== 0 ? (
                  <div className="bg">
                    <div className="tabl">
                      <div className="row">
                        <Row>
                          <Col span={2}>
                            <div className="t no">No</div>
                          </Col>
                          <Col span={8}>
                            <div className="t name">Produce</div>
                          </Col>
                          <Col span={3}>
                            <div className="t quantity">Quantity</div>
                          </Col>
                          <Col span={4}>
                            <div className="t price">Price</div>
                          </Col>
                          <Col span={3}>
                            <div className="t discount">Discount</div>
                          </Col>
                          <div className="c">
                            <Col span={4}>
                              <div className="t total">Total</div>
                            </Col>
                          </div>
                        </Row>
                      </div>
                      <div>
                        {DataOrder?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đang xử lý" key="2">
                {DataOrder.length !== 0 ? (
                  <div className="bg">
                    <div className="tabl">
                      <div className="row">
                        <Row>
                          <Col span={2}>
                            <div className="t no">No</div>
                          </Col>
                          <Col span={8}>
                            <div className="t name">Produce</div>
                          </Col>
                          <Col span={3}>
                            <div className="t quantity">Quantity</div>
                          </Col>
                          <Col span={4}>
                            <div className="t price">Price</div>
                          </Col>
                          <Col span={3}>
                            <div className="t discount">Discount</div>
                          </Col>
                          <div className="c">
                            <Col span={4}>
                              <div className="t total">Total</div>
                            </Col>
                          </div>
                        </Row>
                      </div>
                      <div>
                        {DataOrder?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đang vận chuyển" key="3">
                {DataOrder.length !== 0 ? (
                  <div className="bg">
                    <div className="tabl">
                      <div className="row">
                        <Row>
                          <Col span={2}>
                            <div className="t no">No</div>
                          </Col>
                          <Col span={8}>
                            <div className="t name">Produce</div>
                          </Col>
                          <Col span={3}>
                            <div className="t quantity">Quantity</div>
                          </Col>
                          <Col span={4}>
                            <div className="t price">Price</div>
                          </Col>
                          <Col span={3}>
                            <div className="t discount">Discount</div>
                          </Col>
                          <div className="c">
                            <Col span={4}>
                              <div className="t total">Total</div>
                            </Col>
                          </div>
                        </Row>
                      </div>
                      <div>
                        {DataOrder?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đã giao" key="4">
                {DataOrder.length !== 0 ? (
                  <div className="bg">
                    <div className="tabl">
                      <div className="row">
                        <Row>
                          <Col span={2}>
                            <div className="t no">No</div>
                          </Col>
                          <Col span={8}>
                            <div className="t name">Produce</div>
                          </Col>
                          <Col span={3}>
                            <div className="t quantity">Quantity</div>
                          </Col>
                          <Col span={4}>
                            <div className="t price">Price</div>
                          </Col>
                          <Col span={3}>
                            <div className="t discount">Discount</div>
                          </Col>
                          <div className="c">
                            <Col span={4}>
                              <div className="t total">Total</div>
                            </Col>
                          </div>
                        </Row>
                      </div>
                      <div>
                        {DataOrder?.map((data, index) => (
                          <Order orderData={data} no={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NoOrder />
                )}
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
        {/* <div className="right-bot">
          <NoOrder></NoOrder>
        </div> */}
      </div>
    </ManageOrderStyle>
  );
}

export default ManageOrder;
