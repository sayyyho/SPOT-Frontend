import * as S from "./Kakao.styled";
import KakaoIcon from "../../assets/images/kakao_login.png";
import PropTypes from "prop-types";

function Kakao(props) {
  return (
    <form
      method="POST"
      action="https://api.ice-spot.site/oauth2/authorization/kakao"
    >
      <S.Container>
        <button type="submit">
          <S.StyledImage
            src={KakaoIcon}
            onClick={props.onClick}
          ></S.StyledImage>
        </button>
      </S.Container>
    </form>
  );
}

Kakao.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Kakao;
