import * as S from './FindSpot.styled';
import {useEffect} from 'react';
import Header from '@/components/Common/Header';
const {kakao} = window;

export const FindSpot = () => {
  useEffect(() => {
    console.log(kakao);

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5582876, 127.0001671),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    console.log(map);
  }, []);
  return (
    <S.Wrapper id="map">
      <Header isAbsolute={true} item="arrow"></Header>
    </S.Wrapper>
  );
};
