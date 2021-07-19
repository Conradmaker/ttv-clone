import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html{
    background-color: #aaa;
    font-family: 'Roboto',sans-serif;
    color:#fff;
  }
  a{
    text-decoration:none;
    color:#fff;
  }
  body {
    background-image: linear-gradient(
      122deg,
      #fff 0.12%,
      #000 0,
      #000 50%,
      #fff 0,
      #fff 50.12%,
      #000 0,
      #000
    );
    background-size: 401px 641.73px;
  }
  .switch-enter {
  opacity: 0;
  transform: translate(50%,-50%);
  }
  .switch-enter-active {
    opacity: 1;
    transform: translate(0%,0%);
    transition: all .25s;
  }
  .switch-exit {
    opacity: 1;
    transform: translate(0%,0%);
  }
  .switch-exit-active {
    opacity: 0;
    transform: translate(-50%,50%);
    transition: all .25s;
  }
`;
