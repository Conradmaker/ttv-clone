import React from 'react';
import { LeftNavigationContainer } from './styles';

export default function LeftNavigation(): JSX.Element {
  return (
    <LeftNavigationContainer>
      <img src="http://ttv.waynehills.co/assets/logo.png" alt="" />
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
