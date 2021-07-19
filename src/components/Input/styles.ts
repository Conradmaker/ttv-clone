import styled from 'styled-components';

export const CommonInputBox = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0.3rem;
  border: none;
  overflow: visible;
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 0.7rem 0.56rem 0.5rem;
    border: none;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid #ddd;
    font-size: 120%;
    outline: none;

    &::-webkit-input-placeholder {
      transition: color 300ms ease;
    }
    &:not(:focus)::-webkit-input-placeholder {
      color: transparent;
    }
  }
  hr {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 0.15rem;
    border: none;
    background: #607d8b;
    font-size: 1px;
    will-change: transform, visibility;
    transition: all 200ms ease-out;
    transform: scaleX(0);
    visibility: hidden;
    z-index: 10;
  }
  input:focus ~ hr {
    transform: scaleX(1);
    visibility: visible;
    background-color: #634dd1;
  }
  label {
    position: absolute;
    top: 0.625rem;
    left: 0.625rem;
    color: #607d8b;
    transform-origin: 0 -150%;
    transition: transform 300ms ease;
    pointer-events: none;
  }
  input:focus ~ label,
  input:valid ~ label {
    transform: scale(0.6);
    color: #634dd1;
  }
`;
