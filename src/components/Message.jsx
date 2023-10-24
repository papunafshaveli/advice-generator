import React from "react";
import styled from "styled-components";

export default function Message({ count }) {
  return (
    <MessageDiv>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </MessageDiv>
  );
}

const MessageDiv = styled.div`
  p {
    font-size: 3rem;
    text-align: center;
  }
  strong {
    font-weight: 900;
    font-size: 4rem;
  }
`;
