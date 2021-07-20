import React from 'react';
import { Link } from 'react-router-dom';
import { LeftNavigationContainer } from './styles';

type LeftNavProps = {
  toggleLoginModal: () => void;
};
export default function LeftNavigation({ toggleLoginModal }: LeftNavProps): JSX.Element {
  return (
    <LeftNavigationContainer>
      <Link to="/">
        <img src="https://i.ibb.co/Y2Wm8dQ/logo.png" alt="logo" />
      </Link>
      <ul>
        <li>
          <span onClick={toggleLoginModal}>Login</span>
        </li>
        <li>
          <span>Dashboard(Beta)</span>
        </li>
      </ul>
    </LeftNavigationContainer>
  );
}
