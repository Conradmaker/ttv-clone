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
        <img src="http://ttv.waynehills.co/assets/logo.png" alt="" />
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
