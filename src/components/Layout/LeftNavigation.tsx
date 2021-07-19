import React from 'react';
import { Link } from 'react-router-dom';
import { LeftNavigationContainer } from './styles';

export default function LeftNavigation(): JSX.Element {
  return (
    <LeftNavigationContainer>
      <Link to="/">
        <img src="http://ttv.waynehills.co/assets/logo.png" alt="" />
      </Link>
      <ul>
        <li>
          <span>Login</span>
        </li>
        <li>
          <span>Dashboard(Beta)</span>
        </li>
      </ul>
    </LeftNavigationContainer>
  );
}
