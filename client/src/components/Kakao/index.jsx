import * as S from "./Kakao.styled";
import KakaoIcon from "../../assets/images/kakao_login.png";
import PropTypes from "prop-types";

function Kakao(props) {
  return (
    <S.Container>
      <S.StyledImage src={KakaoIcon} onClick={props.onClick}></S.StyledImage>
    </S.Container>
  );
}

Kakao.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Kakao;
