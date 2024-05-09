import * as S from './Header.styled';
import PropTypes from 'prop-types';
import Text from '../Text';
import {Image} from '../Image';

const Header = (props) => {
  return (
    <S.Container>
      {props.item === 'arrow' ? (
        <Image src="arrow_left.png" alt="화살표"></Image>
      ) : (
        <>
          <Image src="location.png" alt="위치"></Image>
          <Text>충무로</Text>
        </>
      )}
    </S.Container>
  );
};

Header.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Header;
