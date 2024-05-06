import Image from '../../components/Image';
import KakaoLogin from '../../components/KakaoLogin';
import Text from '../../components/Text';
import * as S from './OnBoarding.styled';
import {login} from '../../apis/login';

function OnBoarding() {
  const handleLogin = () => {
    const response = login();
    console.log(response);
  };

  return (
    <S.Container>
      <Image></Image>
      <Text></Text>
      <KakaoLogin onClick={handleLogin}></KakaoLogin>
    </S.Container>
  );
}

export default OnBoarding;
