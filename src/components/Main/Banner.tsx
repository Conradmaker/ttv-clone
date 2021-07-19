import React from 'react';
import { useHistory } from 'react-router-dom';
import CommonBtn from '../Button/CommonBtn';
import { MainBannerContainer } from './styles';

export default function Banner(): JSX.Element {
  const history = useHistory();
  const goStart = () => history.push('getting-started');
  return (
    <MainBannerContainer>
      <h1>The&nbsp;easiest&nbsp;way to&nbsp;make&nbsp;a&nbsp;video</h1>
      <CommonBtn onClick={goStart}>Start</CommonBtn>
    </MainBannerContainer>
  );
}
