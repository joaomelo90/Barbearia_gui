import styled, { keyframes } from "styled-components";
import Service from './../../assets/service.jpg'

const animate = keyframes`
  0% {
    --a: 0deg;
  }
  100% {
    --a: 360deg;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh 0 ;
`;

export const Box = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: repeating-conic-gradient(from var(--a), #ff0000 0%, #ff0000 5%, transparent 5%, transparent 40%, #ff0000 50%);
  animation: ${animate} 4s linear infinite;
  border-radius:20px;

  --a: 0deg;

  @property --a {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }

 &::before {
    content: '';
    position: absolute;
    width:100%;
    height:100%;

    background: repeating-conic-gradient(from var(--a), #0000ff 0%, #0000ff 5%, transparent 5%, transparent 40%, #0000ff 50%);
  animation: ${animate} 4s linear infinite;
  animation-delay: -1s;
  border-radius:20px;
  }

  &::after{
    content:'';
    position: absolute;
    inset: 8px;
    background: url(${Service});
    background-size: cover;
    border-radius:15px;
    border:8px solid #25252b;
  }
`;

