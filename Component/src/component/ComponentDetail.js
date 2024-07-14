import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";

const Blind = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;
const ComponentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const previousLocation = () => {
    let location = window.location.pathname;
    if (location.indexOf("Main") > 1) {
      navigate("/");
    } else {
      navigate("/detail");
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          previousLocation();
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
        <Blind>뒤로가기</Blind>
      </button>
      <h1>Component Detail</h1>
      <p>Detail for component with ID: {id}</p>
      <CopyToClipboard text="Hello test!">
        <button>Copy to clipboard</button>
      </CopyToClipboard>
    </div>
  );
};

export default ComponentDetail;
