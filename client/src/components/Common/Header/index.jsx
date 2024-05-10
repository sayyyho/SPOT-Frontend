import * as S from './Header.styled';
import PropTypes from 'prop-types';
import Text from '../Text';
import {Image} from '../Image';
import {useNavigate} from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <S.Container isAbsolute={props.isAbsolute}>
      {props.item === 'arrow' ? (
        <Image src="arrow_left.png" alt="화살표" onClick={handleBack}></Image>
      ) : (
        <>
          <Image src="location.png" alt="위치"></Image>
          <Text>{props.dong}</Text>
        </>
      )}
    </S.Container>
  );
};

Header.propTypes = {
  item: PropTypes.string.isRequired,
  isAbsolute: PropTypes.bool,
  dong: PropTypes.string,
};

export default Header;
