import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
  from{
    transform: scale(0.3);
  }
  to{
    transform: scale(1);
  }
`;

export const ModalWrappertContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const LoginModalBox = styled.form`
  border-radius: 5px;
  width: 33rem;
  padding: 1.3rem 1.3rem;
  background-color: #fff;
  animation: ${scaleUp} 0.2s;
  .input__common + .input__common {
    margin-top: 20px;
  }
  button {
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
    text-align: center;
    background-color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 2px 4px #aaa;
  }
`;

export const TermModalBox = styled.div`
  border-radius: 5px;
  padding: 2rem;
  background-color: #fff;
  width: 68rem;
  color: #000;
  display: flex;
  flex-direction: column;
  animation: ${scaleUp} 0.2s;
  & > h3 {
    font-weight: bold;
    font-size: 1.2rem;
  }
  & > p {
    margin: 1.4rem 0;
  }
  & > ul {
    li {
      font-size: 0.83rem;
      line-height: 1.5;
      &::before {
        content: '● ';
      }
    }
  }
  & > .close {
    cursor: pointer;
    align-self: flex-end;
    margin-top: 0.5rem;
    padding: 0.8rem;
    border-radius: 5px;
    &:hover {
      background-color: #eee;
    }
  }
`;
