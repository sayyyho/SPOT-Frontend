import * as S from "./Circle.styled";

function Circle({ image }) {
  return (
    <S.Container>
      <S.StyledImage src={image} />
    </S.Container>
  );
}

export default Circle;
