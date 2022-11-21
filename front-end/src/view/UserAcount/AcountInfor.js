import React, { useState } from "react";
import AcountInforStyle from "../../styled/ManageAcount/AcountInfor";
import UserAcountInfor from "../../data/UserAcountInfor";
import { Link } from "react-router-dom";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";

function AcountInfor() {
  return (
    <AcountInforStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="title">Thông tin tài khoản</div>
        {console.log(UserAcountInfor[1].name)}
        <form className="form">
          <div className="f">
            <div className="i">
              <label>Tên hiển thị</label>
              <input
                type={"text"}
                className="name"
                value={UserAcountInfor[1].name}
              />
            </div>
            <div className="i">
              <label>Số điện thoại</label>
              <input
                type={"tel"}
                className="phone"
                value={UserAcountInfor[1].phone}
              />
            </div>
          </div>
          <div className="f">
            <div className="i">
              <label>Email</label>
              <input
                type={"email"}
                className="email"
                defaultValue={UserAcountInfor[1].email}
              />
            </div>
            <div className="i">
              <label>Ngày sinh</label>
              <input
                type={"date"}
                className="dateOfBird"
                defaultValue={UserAcountInfor[1].dateOfBird}
              />
            </div>
          </div>
          <div className="i">
            <label>Giới tính</label>
            <select className="sex">
              <option value={"male"}>Nam</option>
              <option value={"female"}>Nữ</option>
              <option value={"other"}>Khác</option>
            </select>
          </div>
          <div>
            <label>Đổi mật khẩu</label>
            <div className="re-pass">
              <div>
                <p>Mật khẩu hiện tại</p>
                <input
                  type={"text"}
                  defaultValue={""}
                  placeholder={"*********"}
                ></input>
              </div>
              <div>
                <p>Mật khẩu mới</p>
                <input
                  type={"text"}
                  value={UserAcountInfor[1].password}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <input type={"submit"} value={"Lưu"} />
          </div>
        </form>
      </div>
    </AcountInforStyle>
  );
}

export default AcountInfor;
