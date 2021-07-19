import React from 'react';
import CommonInput from '../Input/CommonInput';
import ModalWrapper from './ModalWrapper';
import { LoginModalBox } from './styles';

type LoginModalProps = {
  onClose: () => void;
};
export default function LoginModal({ onClose }: LoginModalProps): JSX.Element {
  const onClickBackGroung = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <ModalWrapper onClick={onClickBackGroung}>
      <LoginModalBox>
        <CommonInput placeholder="Ex.pat@example.com" label="Email" required />
        <CommonInput label="Password" type="password" required />
        <button type="submit">Login</button>
      </LoginModalBox>
    </ModalWrapper>
  );
}
