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
      color={props.color}
      radius={props.radius}
      isFlex={props.isFlex}
      alignProp={props.alignProp}
      justifyProp={props.justifyProp}
      flexDirection={props.flexDirection}
      gapProp={props.gapProp}
    >
      {props.children}
    </S.Box>
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
  color: PropTypes.string,
  isFlex: PropTypes.bool,
  alignProp: PropTypes.string,
  justifyProp: PropTypes.string,
  flexDirection: PropTypes.string,
  gapProp: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Box;
