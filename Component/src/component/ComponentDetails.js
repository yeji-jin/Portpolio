import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ComponentDetails = () => {
  const { title } = useParams(); // URL 파라미터에서 title을 가져옴

  return (
    <div>
      <h1>Component Details</h1>
      <p>Title: {title}</p>
      {/* 추가적인 로직 및 UI를 여기에 추가 */}
    </div>
  );
};

export default ComponentDetails;
