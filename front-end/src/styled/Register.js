import styled from "styled-components";

const RegisterStyle = styled.div`
  display: flex;

  .left {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40%;
    background-color: rgb(0, 88, 163);
  }
  .left-head {
    display: flex;
    margin-top: 10%;
    align-items: center;
  }
  .logo {
    color: rgb(255, 255, 255);
    margin-left: 10%;
    width: 30%;
  }
  .icon-arrow {
    color: rgb(255, 255, 255);
    margin-left: 6%;
    font-size: 20px;
  }

  .left-note {
    width: 60%;
    margin-top: 10%;
  }
  .text1 {
    color: rgb(251, 217, 20);
  }
  .text2 {
    color: rgb(255, 255, 255);
  }
  .left-note p {
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 20px;
  }
  .left-bot {
    margin-left: 15.9%;
    width: 60%;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .right {
    width: 60%;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 20% 30% 20% 10%;
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 90%;
    height: 3rem;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 2rem;
    margin-top: 0.4rem;
    font-size: 14px;
  }
  input[type="submit" i] {
    background: #0058a3;
    border-radius: 64px;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.4, 1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 3.5rem;
    padding: 0 2rem;
    width: 90%;
    color: rgb(255, 255, 255);
    font-size: 1.25rem;
    cursor: pointer;
  }
  input[type="submit" i]:disabled {
    background: #0058a3;
    border-radius: 64px;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.4, 1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 3.5rem;
    padding: 0 2rem;
    width: 90%;
    color: rgb(255, 255, 255);
    font-size: 1.25rem;
    opacity: 50%;
    cursor: not-allowed;
  }
  /* .btn-submit-disable {
    background: #0058a3;
    border-radius: 64px;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.4, 1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 3.5rem;
    padding: 0 2rem;
    width: 90%;
    color: rgb(255, 255, 255);
    font-size: 1.25rem;
    opacity: 20%;
  } */
  input[type="checkbox" i] {
    display: block;
    width: 5%;
  }
  .warning {
    color: red;
    margin-top: -7%;
    margin-bottom: 3%;
  }
  .pass {
    position: relative;
  }
  .hide-pass {
    position: absolute;
    top: 13%;
    right: 11%;
    padding: 7px;
  }
  .link-login {
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    color: rgb(251, 217, 20);
    margin-top: -1rem;
  }
  .img {
    display: flex;
    flex-direction: row;
    width: 60%;
  }
  .img-left,
  .img-right {
    width: 48%;
    margin-right: 2%;
  }
  .img1 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_1.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 16rem;
  }
  .img2 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_2.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 16rem;
  }
  .img3 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_3.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 12rem;
  }
  .img4 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_4.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 16rem;
  }
  .img5 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_5.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 12rem;
  }
  .img6 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_6.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 12rem;
  }
  .img7 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_7.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 16rem;
  }
  .img8 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_8.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 12rem;
  }
  .img9 {
    background-image: url(https://nl.accounts.ikea.com/resources/static/SIGNUP_IMAGES_9.jpg);
    width: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 0.4rem;
    height: 16rem;
  }
`;
export default RegisterStyle;
