import React from "react";
import styled from "styled-components";

const RatingStyle = styled.div`
  span {
    font-size: 16px;
    margin-right: 5px;
    .fa-star,
    .fa-star-half-o {
      color: #111;
    }
    .fa-star-o {
      color: #fff;
    }
  }
`;

const Rating = ({ value }) => {
  return (
    <>
      <RatingStyle>
        <span>
          <i
            className={
              value >= 1
                ? "fa fa-star"
                : value >= 0.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 2
                ? "fa fa-star"
                : value >= 1.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 3
                ? "fa fa-star"
                : value >= 2.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 4
                ? "fa fa-star"
                : value >= 3.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              value >= 5
                ? "fa fa-star"
                : value >= 4.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
      </RatingStyle>
    </>
  );
};

export default Rating;
