import * as S from './Header.styled';
import ArrowIcon from '../../../assets/images/arrow_left.png';

const Header = () => {
  return (
    <S.Container>
      <S.Arrow src={ArrowIcon} alt={"화살표"} />
    </S.Container>
  );
}

export default Header;
