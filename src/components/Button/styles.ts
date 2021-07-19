import styled from 'styled-components';

export const CommonBtnBox = styled.button<{ disabled?: boolean }>`
  font-family: 'Nanum Myeongjo', serif;
  padding: 1.3rem 2rem;
  margin: 0.5rem 0;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  background-color: #fff;
  outline: none;
  border-radius: 5px;
  border: none;

  &:disabled {
    cursor: initial;
    background-color: #aaa;
  }
`;
