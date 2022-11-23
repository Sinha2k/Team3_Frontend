import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Typography, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const AddProduct = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Typography.Title>Thêm sản phẩm</Typography.Title>
      <Divider />
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={(values) => console.log(values)}
      >
        <Controller
          name="imageProduct"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item label="Ảnh sản phẩm">
              <Upload
                {...field}
                onChange={(info) => field.onChange(info)}
                beforeUpload={() => false}
                maxCount={1}
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
              >
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Tải lên
                  </div>
                </div>
              </Upload>
            </Form.Item>
          )}
        />
        <Controller
          name="productName"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item label="Tên sản phẩm">
              <Input {...field} placeholder="Tên sản phẩm" />
            </Form.Item>
          )}
        />
        <Controller
          name="material"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item label="Chất liệu">
              <Input {...field} placeholder="Chất liệu" />
            </Form.Item>
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item label="Giá">
              <Input {...field} placeholder="Giá" />
            </Form.Item>
          )}
        />
        <Form.Item label="Mô tả">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="">
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Thêm
          </Button>
          <Button htmlType="button">Reset</Button>
          <Button type="link" htmlType="button">
            Hủy
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
