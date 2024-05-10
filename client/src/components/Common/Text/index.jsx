import * as S from './Text.styled';
import PropTypes from 'prop-types';

function Text(props) {
  return (
    <S.Text
      color={props.color}
      isFlex={props.isFlex}
      margin={props.margin}
      fontSize={props.fontSize}
      onClick={props.onClick}
      isAbsolute={props.isAbsolute}
    >
      {props.children}
    </S.Text>
  );
}

Text.propTypes = {
  color: PropTypes.string,
  isFlex: PropTypes.bool,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  isAbsolute: PropTypes.bool,
};

export default Text;
