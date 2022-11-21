import styled from "styled-components";

const WarrantyStyle = styled.div`
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
  .right-bot {
    background: #f9f9f9;
    border-radius: 1%;
    width: 100%;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
  }
  .icon {
    font-size: 3rem;
  }
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
  }
  .title {
    font-weight: 800;
    font-size: 35px;
    line-height: 48px;
    margin: 2% 3%;
    padding-top: 3%;
  }

  .search .ant-input-group-wrapper {
    width: 90%;
    margin-left: 5%;
  }
  .search .ant-input {
    height: 42px;
  }
  .search .ant-input-search-button {
    height: 42px;
    width: 120%;
  }
  .wr {
    font-weight: 700;
  }
`;
export default WarrantyStyle;
