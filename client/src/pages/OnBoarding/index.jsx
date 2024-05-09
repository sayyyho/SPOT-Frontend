import Image from '../../components/Image';
import KakaoLogin from '../../components/KakaoLogin';
import Text from '../../components/Common/Text';
import * as S from './OnBoarding.styled';

function OnBoarding() {
  return (
    <S.Container>
      <Image></Image>
      <S.TextArea>
        <Text isFlex={true}>
          <h2>내 주변 킥보드 주차장 찾기</h2>
        </Text>
        <Text isFlex={true}>올바른 공유킥보드 주차 문화 만들기</Text>
        <Text isFlex={true}>SPOT에서 함께 시작하세요!</Text>
        <Text isFlex={true} fontSize="10px">
          로그인 후, 위치 정보 이용 동의 시 사용 가능합니다!
        </Text>
      </S.TextArea>
      <KakaoLogin></KakaoLogin>
    </S.Container>
  );
}

export default OnBoarding;
