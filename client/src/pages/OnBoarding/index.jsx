import Image from '../../components/Image';
import KakaoLogin from '../../components/KakaoLogin';
import Text from '../../components/Text';
import * as S from './OnBoarding.styled';

function OnBoarding() {
  return (
    <S.Container>
      <Image></Image>
      <Text></Text>
      <KakaoLogin></KakaoLogin>
    </S.Container>
  );
}

export default OnBoarding;
