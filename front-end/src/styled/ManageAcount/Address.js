import styled from "styled-components";

const AddressStyle = styled.div`
  display: flex;
  .right {
    background: #f9f9f9;
    border-radius: 1%;
    width: 65%;
    margin-top: 4%;
    padding-bottom: 5%;
  }
  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-left: 4%;
    padding-top: 5%;
    margin-bottom: 3%;
  }
  .btn-add {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 34px;
    color: #007cc1;
    margin-left: 5%;
    cursor: pointer;
  }
  .ad {
    font-weight: 700;
  }
  .card-address {
    display: flex;
    flex-direction: column;
    margin: 1% 6%;
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 88%;
    height: 3rem;
    border-radius: 9px;
    border: 2px solid #d6d0d0;
    padding: 10px 15px;
    margin-bottom: 15px;
    font-size: 14px;
    margin-left: 6%;
    margin-top: 1%;
  }
  input[type="submit" i] {
    background: #007cc1;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 0;
    transition-duration: 0.25s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 2.6rem;
    padding: 0 2rem;
    width: 8%;
    color: rgb(255, 255, 255);
    font-size: 1rem;
    position: absolute;
    bottom: -28%;
    right: 6.1%;
    height: 93%;
    border: none;
    cursor: pointer;
  }
  .form {
    position: relative;
  }
`;

export default AddressStyle;
