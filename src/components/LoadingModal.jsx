import React from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const LoadingModal = () => {
  return (
    <Wrapper>
      <ClipLoader color='#ffffff' />
    </Wrapper>
  );
};

export default LoadingModal;

const Wrapper = styled.div`
  margin: 0 auto;
`;
