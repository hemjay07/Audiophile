import React from "react";
import { useNavigate } from "react-router-dom";

export default function ({ id }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          console.log(id);
          navigate(`/productDetail/${id}`);
        }}
      >
        SEE PRODUCT
      </button>
    </>
  );
}
