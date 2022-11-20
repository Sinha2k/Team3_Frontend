import React, { useState } from "react";
import styled from "styled-components";
import RatingBar from "@mui/material/Rating";
import { styled as style } from "@mui/material/styles";

const ReviewStyled = styled.div``;

const StyledRating = style(RatingBar)({
  "& .MuiRating-iconFilled": {
    color: "#111",
  },
  "& .MuiRating-iconHover": {
    color: "#111",
  },
});

const Review = () => {
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");

  return (
    <ReviewStyled className="product-variation">
      <h2 style={{ marginTop: "4rem", marginBottom: "2.5rem" }}>
        Xin mời viết đánh giá
      </h2>
      <p>Bạn nghĩ gì về sản phẩm này?</p>
      <StyledRating
        className="rating-bar"
        name="customized-color"
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
        value={rating}
        precision={1}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        icon={<i className="fa fa-star" aria-hidden="true"></i>}
        emptyIcon={
          <i
            style={{ color: "#111" }}
            className="fa fa-star-o"
            aria-hidden="true"
          ></i>
        }
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Nhập nội dung tại đây"
      />
      <div
        style={comment.length > 100 ? { color: "red" } : {}}
        className="words-limit"
      >
        <span>Tóm tắt đánh giá của bạn trong một vài từ</span>
        <span>{comment.length}/100</span>
      </div>
    </ReviewStyled>
  );
};

export default Review;
