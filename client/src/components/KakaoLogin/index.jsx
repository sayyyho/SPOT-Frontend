import * as S from './Kakao.styled';
import KakaoIcon from '../../assets/images/kakao_login.png';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function KakaoLogin(props) {
  return (
    <S.Container>
      <Link to="https://api.ice-spot.site/oauth2/authorization/kakao">
        <S.StyledImage src={KakaoIcon} onClick={props.onClick}></S.StyledImage>
      </Link>
    </S.Container>
  );
}
KakaoLogin.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default KakaoLogin;
