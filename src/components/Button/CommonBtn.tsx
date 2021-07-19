import React from 'react';
import { CommonBtnBox } from './styles';

type CommonBtnProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
export default function CommonBtn({
  children,
  disabled = false,
  ...rest
}: CommonBtnProps): JSX.Element {
  return (
    <CommonBtnBox disabled={disabled} {...rest}>
      {children}
    </CommonBtnBox>
  );
}
