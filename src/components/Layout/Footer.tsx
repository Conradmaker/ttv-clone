import React from 'react';
import { FooterContainer } from './styles';

type FooterProps = {
  toggleTermModal: () => void;
};
export default function Footer({ toggleTermModal }: FooterProps): JSX.Element {
  return (
    <FooterContainer>
      <p onClick={toggleTermModal}>Terms of Use</p>
      <ul>
        <li>B1, E10Dong, 70, Magokjungang 10-ro, Gangseo-gu, Seoul, Republic of Korea</li>
        <li>Founder : John (Yi.su.min)</li>
        <li>Email : waynehills.ventures@gmail.com</li>
      </ul>
    </FooterContainer>
  );
}
