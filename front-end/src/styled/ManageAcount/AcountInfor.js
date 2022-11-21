import styled from "styled-components";

const AcountInforStyle = styled.div`
  display: flex;
  .right {
    background: #ebe9e9;
    border-radius: 1%;
    width: 65%;
    margin-top: 4%;
  }
  /* .left {
    width: 30%;
  } */
  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-left: 4%;
    padding-top: 5%;
    margin-bottom: 3%;
  }
  .form {
    display: flex;
    flex-direction: column;
    margin-left: 7%;
  }
  label {
    font-weight: 500;
    font-size: 1.15rem;
  }
  .form input,
  select {
    display: block;
    box-sizing: border-box;
    width: 150%;
    height: 3rem;
    border-radius: 4px;
    border: 2px solid #d6d0d0;
    padding: 10px 15px;
    margin-bottom: 15px;

    font-size: 14px;
  }
  .form select {
    width: 31.9%;
  }
  .form input[type="date" i] {
    width: 188%;
  }
  .i {
  }
  .f {
    display: flex;
    width: 100%;
  }
  .f > div:first-child,
  .re-pass > div:first-child {
    margin-right: 35%;
  }
  .re-pass {
    display: flex;
  }
  .form input[type="submit" i] {
    margin: 5% 21%;
    background: #0058a3;
    border-radius: 64px;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.4, 1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 3.5rem;
    padding: 0 2rem;
    width: 50%;
    color: rgb(255, 255, 255);
    font-size: 1.25rem;
  }
  .re-pass p {
    margin: 1%;
  }
  .ai {
    font-weight: 700;
  }
`;

export default AcountInforStyle;
