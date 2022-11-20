import React from "react";
import styled from "styled-components";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 300;
  .modal-layer {
    display: block;
    position: fixed;
    z-index: 7999;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 0.25;
    pointer-events: all;
    will-change: opacity;
    transition: 0.3s ease-in-out;
  }
  aside {
    transition: 0.3s ease-in-out;
    position: fixed;
    transform: translateX(480px);
    top: 0;
    bottom: 0;
    right: 0;
    width: 480px;
    z-index: 8000;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    /* transform: translateX(0);
    transition: transform 200ms 0s; */
    .modal-header {
      padding: 0 1rem;
      z-index: 1000;
      position: sticky;
      background: #fff;
      top: 0;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
      .anticon {
        position: relative;
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        line-height: 1.3333333333;
        font-weight: bold;
        text-align: center;
        color: #111;
        padding: 0.75rem;
        display: inline-flex;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        background: #f5f5f5;
      }
    }
    .modal-body {
      padding-left: 40px;
      padding-right: 40px;
      padding-bottom: 32px;
    }

    .modal-footer {
      padding: 1.5rem 3rem;
      border-top: 1px solid #dfdfdf;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      z-index: 1000;
      left: 0;
      right: 0;
      /* width: 480px; */
      button {
        position: relative;
        font-size: 0.875rem;
        background: #111;
        border: 0;
        padding: 0;
        line-height: 1.4285714286;
        font-weight: bold;
        text-align: center;
        display: inline-flex;
        border-radius: 64px;
        cursor: pointer;
        outline: 0;
        vertical-align: top;
        width: 100%;
        color: #fff;
        min-height: 3.5rem;
        padding: 0 2rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover {
          background: rgba(51, 51, 51, 1);
        }
      }
    }
  }
`;

const Modal = ({ children, visible, setVisible, footer, setWriteReview }) => {
  return (
    <ModalStyle
      style={
        visible
          ? { visibility: "visible", display: "block" }
          : { visibility: "hidden", display: "none" }
      }
    >
      <div onClick={() => setVisible(false)} className="modal-layer"></div>
      <aside
        style={{
          transform: `${visible ? "translate(0px)" : "translate(480px)"}`,
        }}
      >
        <div className="modal-header">
          <span>
            <CloseOutlined onClick={() => setVisible(false)} />
          </span>
          {footer && (
            <span onClick={() => setWriteReview(false)}>
              <LeftOutlined />
            </span>
          )}
        </div>
        <div className="modal-body">{children}</div>
        {footer && (
          <div className="modal-footer">
            <button>Đăng nhập và đánh giá</button>
          </div>
        )}
      </aside>
    </ModalStyle>
  );
};

export default Modal;
