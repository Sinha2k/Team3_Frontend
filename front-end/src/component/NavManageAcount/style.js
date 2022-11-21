import styled from "styled-components";

const NavManageAcountStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 100px;
  .left {
    margin-top: 5%;
  }
  .avt {
    width: 400px;
    display: flex;
    position: relative;
  }
  .avt::after {
    content: "";
    position: absolute;
    width: 75%;
    border: 0.5px solid #b7a4a4;
    bottom: -27%;
  }
  .avt-img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
  .avt-info {
    margin-left: 5px;
  }
  .avt-name {
    font-weight: 700;
    font-size: 1rem;
  }
  .acount-info {
    margin-top: 10%;
  }
  .arrow-icon {
    position: absolute;
    right: 23%;
  }
  .address,
  .acount-info {
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.3rem 0rem;
  }
  .anticon {
    padding-right: 2%;
  }
  .address::after {
    content: "";
    position: absolute;
    width: 75%;
    border: 0.5px solid #b7a4a4;
    bottom: -75%;
  }
  .purchase-history,
  .warranty,
  .logout {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10%;
    padding: 0.3rem 0rem;
  }
  .favorite {
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.3rem 0rem;
  }
  .purchase-history::after {
    content: "";
    position: absolute;
    width: 75%;
    border: 0.5px solid #b7a4a4;
    bottom: -75%;
  }
  .favorite::after {
    content: "";
    position: absolute;
    width: 75%;
    border: 0.5px solid #b7a4a4;
    bottom: -75%;
  }
  a {
    color: black;
  }
`;
export default NavManageAcountStyle;
