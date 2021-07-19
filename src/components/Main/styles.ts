import styled from 'styled-components';

export const MainBannerContainer = styled.div`
  margin: 7rem 0;
  h1 {
    font-size: 6.6rem;
    line-height: 1.15;
    font-weight: bold;
  }
`;

export const TTVContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
  textarea {
    width: 100%;
    min-height: 500px;
    min-width: 640px;
    padding: 2rem;
    resize: none;
    background-color: rgba(19, 20, 20, 0.5);
    border: 2px solid #fff;
    color: #fff;
    outline: none;
    &::placeholder {
      font-size: 24px;
      text-align: center;
      color: #ddd;
    }
  }
  p {
    margin-top: 0.5rem;
    font-weight: 300;
    align-self: flex-end;
    font-family: 'Roboto', sans-serif;
  }
  button {
    align-self: flex-end;
  }
`;
