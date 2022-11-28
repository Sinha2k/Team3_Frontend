import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginStyle from "../../styled/Login";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { login } from "../../redux-toolkit/reducer/userSliceReducer";
import { selectStatusLogin } from "../../redux-toolkit/selector/selector";
const schema = yup.object().shape({
  username: yup.string().required(" Vui lòng điền username !"),
  password: yup
    .string()
    .required(" Vui lòng nhập mật khẩu !")
    .min(4, " Mật khẩu từ 4-20 ký tự !")
    .max(20, " Mật khẩu từ 4-20 ký tự !"),
});
function Login() {
  const [hidePass, setHidePass] = useState(true);

  const status = useSelector(selectStatusLogin);
  console.log(status);
  useEffect(() => {
    if (status === "err") {
      window.alert("sai thông tin đăng nhập hoặc mật khẩu!");
    }
  }, [status]);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    dispatch(login(data));
  };
  return (
    <LoginStyle>
      <div className="left">
        <div className="left-head">
          <div className="icon-arrow">
            <ArrowLeftOutlined />
          </div>
          <Link to={"/"}>
            <img
              alt="IKEA"
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/307425108_653553736176279_2774900988508384418_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=IVpOxwBG4mcAX-YNXz4&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdSsNXeNpxVXlVB0c1pMka0fMI2ly5KLf6QaCeeUpft_Dw&oe=6382C306"
              color="#0058a3"
              className="logo"
            />
          </Link>
        </div>
        <div className="left-note">
          <h1>
            <span className="text1">Đăng nhập </span>
            <span className="text2">vào tài khoản FURNITUNO của bạn.</span>
            <p>
              Đăng nhập bằng tên tài khoản và mật khẩu của bạn để có thể mua sắm
              các sản phẩm chất lượng của
            </p>
            <span className={"text1"}>FURNITUNO</span>
          </h1>
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit(submitForm)} className={"form"}>
          <label>Tên đăng nhập</label>
          <input
            type={"text"}
            name={"username"}
            className={
              errors.username?.type !== undefined ? "email-false" : "email-true"
            }
            {...register("username", { required: true })}
          />
          {errors.username?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.username?.message}
            </p>
          )}
          {/* {console.log(errors.email?.message, errors.email?.type)} */}
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
          <Link to={"/forgot-password"}>Bạn quên mật khẩu ?</Link>
          <div style={{ display: "flex", marginLeft: "-1%", marginTop: "5%" }}>
            <input {...register("remember")} type={"checkbox"} />
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
