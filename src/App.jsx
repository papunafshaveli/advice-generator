import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Message from "./components/Message";
import styled from "styled-components";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <AppDiv>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  max-width: 512px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  h1 {
    background-color: white;
    border: 0.5rem solid yellow;
    text-align: center;
    font-size: 3.5rem;
    border-radius: 2rem;
  }
  button {
    font-size: 3rem;
    color: white;
    background-color: blue;
    padding: 2rem 6rem;
    border-radius: 3rem;
    border: none;
    cursor: pointer;
    &:active {
      background: yellow;
      color: black;
    }
  }
`;
