import { Col, Row, Select, DatePicker, Button } from "antd";
import React, { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import { statusList } from "../../Order/constant";

const { RangePicker } = DatePicker;
const ProductFilter = ({ onFilter }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onFilter();
  };

  return (
    <form>
      <Row gutter={16}>
        <Col span={8}>
          <Controller
            name="status"
            control={control}
            render={({ field, fieldState }) => (
              <Select
                style={{ width: "100%" }}
                size="large"
                placeholder="Chọn trạng thái đơn hàng"
                value={field.value || null}
                onChange={(value) => field.onChange(value)}
                allowClear
              >
                {statusList.map((item, index) => (
                  <Select.Option value={item.label} key={index}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            )}
          />
        </Col>
        <Col span={14}>
          <Controller
            name="date"
            control={control}
            render={({ field, fieldState }) => (
              <RangePicker
                style={{ width: "100%" }}
                size="large"
                placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
                onChange={(date, dateString) => field.onChange(dateString)}
              />
            )}
          />
        </Col>
        <Col span={2}>
          <Button size="large" onClick={handleSubmit(onSubmit)}>
            Tìm kiếm
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default memo(ProductFilter);
