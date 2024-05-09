import * as S from './Header.styled';
import ArrowIcon from '@/assets/images/arrow_left.png';
import LocationIcon from '@/assets/images/location.png';
import PropTypes from 'prop-types';
import Text from '../Text';

const Header = (props) => {
  return (
    <S.Container>
      {props.item === 'arrow' ? (
        <S.Image src={ArrowIcon} alt={'화살표'} />
      ) : (
        <>
          <S.Image src={LocationIcon} alt={'위치'} />
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
