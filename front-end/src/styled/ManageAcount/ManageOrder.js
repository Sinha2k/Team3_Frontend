import styled from "styled-components";

const ManageOrderStyle = styled.div`
  display: flex;
  .right {
    width: 65%;
  }
  .right-top {
    background: #f9f9f9;
    border-radius: 1%;
    margin-top: 4%;
    padding-bottom: 7%;
  }
  .title {
    font-weight: 800;
    font-size: 35px;
    line-height: 48px;
    margin: 2% 3%;
    padding-top: 3%;
  }
  .nav {
    display: flex;
    margin-left: 3%;
  }
  .nav-btn {
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    margin-right: 5%;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px #007cc1 solid;
    color: #007cc1;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    margin-right: 5%;
    cursor: pointer;
  }
  .n {
    position: relative;
  }
  .num1,
  .num2,
  .num3,
  .num4 {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;

    color: rgba(1, 1, 1, 0.7);
    position: absolute;
    bottom: -142px;
  }
  .num1 {
    left: 20.4%;
  }
  .num2 {
    left: 36%;
  }
  .num3 {
    left: 59%;
  }
  .num4 {
    right: 28%;
  }
  .bg {
    width: 100%;
    background-color: #f9f9f9;
  }
  .tabl {
    width: 96%;
    margin: 0 2%;
    padding-top: 2%;
    padding-bottom: 5%;
  }
  .tabb {
    position: absolute;
    width: 65%;
  }
  .tabb .ant-tabs-nav {
    margin-left: 2%;
  }
  .tabb .ant-tabs-tab {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
  }
  .ant-tabs-tab-active {
    border-bottom: 2px #007cc1 solid;
    color: #007cc1;
  }
  .mo {
    font-weight: 700;
  }
  .order-table {
    display: flex;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    background: #cdcdcd;
    border-radius: 1%;
    margin-top: 4%;
    padding-bottom: 0.5%;
    position: relative;
  }
  .t {
    margin-left: 5px;
  }
  .no {
    padding-right: 2%;
  }

  .name {
    padding-right: 31%;
  }

  .quantity {
    padding-right: 2%;
  }
  .price {
    padding-right: 9%;
  }

  .discount {
    padding-right: 2%;
  }

  .total {
    padding-right: 0%;
  }
  .nor {
  }
  .row {
    background-color: #cdcdcd;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
  }
  .ant-col {
    border-right: 3px solid white;
    padding-right: 5%;
  }
  .c .ant-col-4 {
    border: none;
  }
`;
export default ManageOrderStyle;
