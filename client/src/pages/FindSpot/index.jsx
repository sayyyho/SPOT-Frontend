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
      const spotList = res.data.data.parkingLotList;
      console.log(spotList);
      const container = document.getElementById('root');
      const options = {
        center: new kakao.maps.LatLng(
          localStorage.getItem('latitude'),
          localStorage.getItem('longitude'),
        ),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      spotList.forEach((el) => {
        // 마커를 생성합니다
        console.log(el);
        new kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(el.lat, el.lon),
          //마커에 hover시 나타날 title
          title: el.detail_address,
        });
      });
    };
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
