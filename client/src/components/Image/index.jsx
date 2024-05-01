import * as S from "./Image.styled";
import OnBoarding from "../../assets/images/onBoarding.png";

function Image() {
  return (
    <S.Container>
      <S.StyledImage src={OnBoarding}></S.StyledImage>
    </S.Container>
  );
}

export default Image;
