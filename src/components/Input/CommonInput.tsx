import React from 'react';
import { CommonInputBox } from './styles';

type CommonInputProps = {
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
};
export default function CommonInput({
  label = '',
  type = 'text',
  ...rest
}: CommonInputProps): JSX.Element {
  return (
    <CommonInputBox className="input__common">
      <input type={type} {...rest} />
      <hr />
      <label>{label}</label>
    </CommonInputBox>
  );
}
