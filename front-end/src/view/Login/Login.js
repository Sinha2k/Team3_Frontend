import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginStyle from "../../styled/Login";
import { Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
const schema = yup.object().shape({
  email: yup
    .string()
    .email(" Định dạng email chưa đúng")
    .required(" Vui lòng điền email !"),
  password: yup
    .string()
    .required(" Vui lòng nhập mật khẩu !")
    .min(4, " Mật khẩu từ 4-20 ký tự !")
    .max(20, " Mật khẩu từ 4-20 ký tự !"),
});
function Login() {
  const [hidePass, setHidePass] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <LoginStyle>
      <div className="left">
        <div className="left-head">
          <div className="icon-arrow">
            <ArrowLeftOutlined />
          </div>
          <img
            alt="IKEA"
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/307425108_653553736176279_2774900988508384418_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=IVpOxwBG4mcAX-YNXz4&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdSsNXeNpxVXlVB0c1pMka0fMI2ly5KLf6QaCeeUpft_Dw&oe=6382C306"
            color="#0058a3"
            className="logo"
          />
        </div>
        <div className="left-note">
          <h1>
            <span className="text1">Đăng nhập </span>
            <span className="text2">vào tài khoản IKEA của bạn.</span>
            <p>
              Đăng nhập bằng địa chỉ email của bạn để thêm số điện thoại di động
              vào tài khoản của bạn.
            </p>
          </h1>
        </div>
        <div className="left-bot">
          <p>© Inter IKEA Systems BV 1999-2022</p>
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit(submitForm)} className={"form"}>
          <label>E-mail</label>
          <input
            type={"email"}
            name={"email"}
            className={
              errors.email?.type !== undefined ? "email-false" : "email-true"
            }
            {...register("email", { required: true })}
          />
          {errors.email?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.email?.message}
            </p>
          )}
          {console.log(errors.email?.message, errors.email?.type)}
          <label>Password</label>
          <div className="pass">
            <input
              type={hidePass ? "password" : "text"}
              name={"password"}
              className={"password"}
              {...register("password", { required: true })}
            />
            <div className="hide-pass" onClick={() => setHidePass(!hidePass)}>
              {hidePass ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </div>
          </div>

          {errors.password?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.password?.message}
            </p>
          )}
          <Link to={"#"}>Bạn quên mật khẩu ?</Link>
          <div style={{ display: "flex", marginLeft: "-1%", marginTop: "5%" }}>
            <input type={"checkbox"} />
            <span style={{ marginTop: "2.5%", marginLeft: "2%" }}>
              Ghi nhớ đăng nhập
            </span>
          </div>
          <div style={{ position: "relative" }}>
            <input type={"submit"} value="Đăng nhập" />
            <Link to={"/register"}>
              <div className="register">Đăng ký</div>
            </Link>
          </div>
        </form>
      </div>
    </LoginStyle>
  );
}

export default Login;
