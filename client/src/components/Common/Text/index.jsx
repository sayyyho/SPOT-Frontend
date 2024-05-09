import * as S from './Text.styled';
import PropTypes from 'prop-types';

function Text(props) {
  return (
    <S.Text color={props.color} isFlex={props.isFlex}>
      {props.children}
    </S.Text>
  );
}

Text.propTypes = {
  color: PropTypes.string,
  isFlex: PropTypes.bool,
};

export default Text;
