import * as S from './Box.styled';
import PropTypes from 'prop-types';

function Box(props) {
  return (
    <S.Box
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      background={props.background}
      radius={props.radius}
    ></S.Box>
  );
}

Box.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  margin: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string.isRequired,
  background: PropTypes.string,
  onClick: PropTypes.func,
};

export default Box;
