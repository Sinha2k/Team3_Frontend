import styled from "styled-components";

const Orderstyle = styled.div`
  display: flex;
  flex-direction: row;
  background: #eaeaea;
  border-radius: 1%;
  width: 100%;
  margin-top: 0.5%;
  padding: 2% 0%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  .row1 {
    width: 100%;
  }
  .t1 {
    padding-left: 30px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .no1 {
    margin-right: 2%;
  }

  .name1 {
    margin-right: 31%;
    display: flex;
  }

  .quantity1 {
    margin-right: 2%;
  }

  .price1 {
    margin-right: 12%;
  }

  .discount1 {
    margin-right: 2%;
  }

  .total1 {
    margin-right: 0%;
  }
  .row1 .ant-col {
    border-right: 3px solid black;
    padding-right: 5%;
  }
  .c1 .ant-col-4 {
    border: none;
  }
`;
export default Orderstyle;
