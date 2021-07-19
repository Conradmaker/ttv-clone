import React, { useState } from 'react';
import CommonBtn from '../Button/CommonBtn';
import { TTVContainer } from './styles';

export default function Ttv(): JSX.Element {
  const [textValue, setTextValue] = useState('');
  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTextValue(e.target.value);
  return (
    <TTVContainer>
      <textarea
        onChange={onChangeText}
        value={textValue}
        placeholder="Put your script here 500~5,000 letters."
      ></textarea>
      <p>{textValue.length} letters</p>
      <CommonBtn disabled={textValue.length < 500}>Convert</CommonBtn>
    </TTVContainer>
  );
}
