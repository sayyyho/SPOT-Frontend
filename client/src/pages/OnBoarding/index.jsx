import Image from "../../components/Image";
import Kakao from "../../components/Kakao";
import Text from "../../components/Text";
import * as S from "./OnBoarding.styled";
import { login } from "../../apis/login";

function OnBoarding() {
  const handleLogin = () => {
    const response = login();
    console.log(response);
  };
  return (
    <S.Container>
      <Image></Image>
      <Text></Text>
      <Kakao onClick={handleLogin}></Kakao>
    </S.Container>
  );
}

export default OnBoarding;
