import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CardAddress from "../../component/CardAddress/CardAddress";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import UserAcountInfor from "../../data/UserAcountInfor";
import AddressStyle from "../../styled/ManageAcount/Address";

function Address() {
  const [dataAddress, setDataAddress] = useState(false);
  const [hideAdd, setHideAdd] = useState(false);
  const { register, handleSubmit } = useForm();
  const submitForm = (data) => {
    UserAcountInfor[1].address.push(data.inputAddress);
    console.log(data);
    setDataAddress(!dataAddress);
  };

  const handleAdd = () => {
    setHideAdd(!hideAdd);
  };
  console.log(UserAcountInfor[1].address);
  return (
    <AddressStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="title">Thông tin liên hệ và danh sách địa chỉ</div>
        <div className="btn-add" onClick={handleAdd}>
          <PlusOutlined />
          &ensp;Thêm địa chỉ mới
        </div>
        {hideAdd && (
          <div>
            <form className="form" onSubmit={handleSubmit(submitForm)}>
              <input type={"text"} {...register("inputAddress")}></input>
              <input type={"submit"} value={"+"}></input>
            </form>
          </div>
        )}

        <div className="card-address">
          {console.log(UserAcountInfor, ">>>")}
          {UserAcountInfor[1].address?.map(
            (data) => (
              console.log(UserAcountInfor[1].address, "<<<<"),
              (<CardAddress cardAddress={data} infor={UserAcountInfor[1]} />)
            )
          )}
        </div>
      </div>
    </AddressStyle>
  );
}

export default Address;
