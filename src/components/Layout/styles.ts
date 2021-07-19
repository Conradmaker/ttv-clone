import styled from 'styled-components';

export const PageLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  font-family: 'Nanum Myeongjo', serif;
  main {
    flex: 1;
    padding: 4.2rem 1rem 2rem 9rem;
    display: flex;
    flex-direction: column;
    p {
      font-weight: bold;
    }
  }
  aside {
    width: 6.25rem;
    position: relative;
    font-family: 'Roboto', sans-serif;
    p {
      position: absolute;
      bottom: 9.375rem;
      right: -2.5rem;
      white-space: nowrap;
      transform: rotate(90deg);
    }
  }
`;

export const LeftNavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 3.125rem;
  img {
    cursor: pointer;
  }
  ul {
    li:first-of-type > span {
      cursor: pointer;
    }
    li {
      font-size: 14px;
      font-weight: bold;
      padding: 2.5rem 1rem;
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  p {
    cursor: pointer;
    text-decoration: underline solid #fff 0.2rem;
    margin-right: 5rem;
  }
  & > ul {
    li:first-of-type {
      margin-bottom: 1rem;
    }
    li {
    }
  }
`;
