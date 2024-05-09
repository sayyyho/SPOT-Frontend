import * as S from './FindSpot.styled';
import {useEffect} from 'react';
import Header from '@/components/Common/Header';
import Text from '@/components/Common/Text';
import {findKickboard} from '@/apis/findKickboard';
const {kakao} = window;

export const FindSpot = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await findKickboard();
      console.log(res);
    };
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(
        localStorage.getItem('latitude'),
        localStorage.getItem('longitude'),
      ),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    console.log(map);
    getData();
  }, []);
  return (
    <S.Wrapper id="map">
      <Text color="black" isAbsolute={true} margin="1rem 0 0 0" isFlex={true}>
        킥보드 주차장 찾기
      </Text>
      <Header isAbsolute={true} item="arrow"></Header>
    </S.Wrapper>
  );
};
