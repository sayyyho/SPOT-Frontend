import * as S from './Button.styled';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return (
    <S.Button
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      background={props.background}
      radius={props.radius}
    ></S.Button>
  );
};

Button.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  margin: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string.isRequired,
  background: PropTypes.string,
  onClick: PropTypes.func,
};
