import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterStyle from "../../styled/Register";
import { Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
const schema = yup.object().shape({
  name: yup.string().required(" Vui lòng nhập tên!"),
  dateOfBirth: yup
    .date(" Vui lòng chọn ngày sinh!")
    .typeError(" Vui lòng chọn ngày sinh!")
    .required(" Vui lòng nhập ngày sinh!")
    .max(new Date(), " Bạn đến từ tương lai à ?")
    .min("1969-11-13", " Bạn sống hơi thọ rồi!"),

  tel: yup
    .string()
    .required(" Vui lòng nhập số điện thoại!")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      " Số điện thoại không hợp lệ!"
    ),

  email: yup
    .string()
    .email(" Định dạng email chưa đúng")
    .required(" Vui lòng nhập email !"),
  password: yup
    .string()
    .required(" Vui lòng nhập mật khẩu !")
    .min(4, " Mật khẩu từ 4-20 ký tự !")
    .max(20, " Mật khẩu từ 4-20 ký tự !"),
  confirmPassword: yup
    .string()
    .required(" Vui lòng nhập xác nhận mật khẩu!")
    .oneOf([yup.ref("password"), null], " Mật khẩu không khớp"),
});
function Register() {
  const [isChecked, setIsChecked] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const handleChecked = (event) => {
    if (event.target.checked) {
      setIsChecked(true);
      console.log("true");
    } else {
      setIsChecked(false);
      console.log("False");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log("data", data);
  };
  return (
    <RegisterStyle>
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
            <span className="text1">Đăng ký </span>
            <span className="text2">tài khoản FurniTuno của bạn.</span>
            <br />
            <p>Nếu bạn đã có tài khoản, hãy </p>
            <Link className="link-login" to={"/login"}>
              đăng nhập
            </Link>
          </h1>
        </div>
        <div className="img">
          <div className="img-left">
            <div className="img1"></div>
            <div className="img2"></div>
            {/* <div className="img3"></div> */}
            {/* <div className="img4"></div> */}
          </div>
          <div className="img-right">
            <div className="img5"></div>
            <div className="img6"></div>
            <div className="img7"></div>
            {/* <div className="img8"></div> */}
          </div>
        </div>
        <div className="left-bot">
          <p>© Inter FurniTuno Systems 2022</p>
        </div>
      </div>
      <div className="right">
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <label>Họ và tên</label>
          <input
            type={"text"}
            {...register("name", { required: true })}
            // placeholder={"Họ và tên"}
          />
          {errors.name?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.name?.message}
            </p>
          )}
          <label>Ngày sinh</label>
          <input
            type={"date"}
            required
            pattern="\d{4}-\d{2}-\d{2}"
            {...register("dateOfBirth", { required: true })}
          />
          {errors.dateOfBirth?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {console.log({ errors })}
              {errors.dateOfBirth?.message}
            </p>
          )}
          <label>Số điện thoại</label>
          <input type={"tel"} {...register("tel", { required: true })} />
          {errors.tel?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.tel?.message}
            </p>
          )}
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
          {/* {console.log(errors.email?.message, errors.email?.type)} */}
          <label>Mật khẩu</label>
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
          <label>Xác nhận mật khẩu</label>
          <div className="pass">
            <input
              type={hidePass ? "password" : "text"}
              name={"password"}
              className={"password"}
              {...register("confirmPassword", { required: true })}
            />
            <div className="hide-pass" onClick={() => setHidePass(!hidePass)}>
              {hidePass ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </div>
          </div>

          {errors.confirmPassword?.type !== undefined && (
            <p className="warning">
              <ExclamationCircleOutlined />
              {errors.confirmPassword?.message}
            </p>
          )}
          <div style={{ display: "flex", marginLeft: "-1%", marginTop: "5%" }}>
            <input type={"checkbox"} onChange={handleChecked} />
            <span style={{ marginTop: "2.5%", marginLeft: "2%" }}>
              Tôi đồng ý với các Điều khoản và Điều kiện và Chính sách Bảo mật .
            </span>
          </div>
          <input
            type={"submit"}
            // className={isChecked ? "btn-submit-disable" : "btn-submit-active"}
            value="Đăng ký"
            disabled={isChecked ? "" : "disabled"}
          />
        </form>
      </div>
    </RegisterStyle>
  );
}

export default Register;
