import * as S from './Image.styled';
import Intro from '../../assets/images/Intro.png';

function Image() {
  return (
    <S.Container>
      <S.StyledImage src={Intro}></S.StyledImage>
    </S.Container>
  );
}

export default Image;
