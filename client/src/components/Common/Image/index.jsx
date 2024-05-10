import * as S from './Image.styled';
import PropTypes from 'prop-types';

export const Image = (props) => {
  return (
    <>
      <S.Image
        src={`https://raw.githubusercontent.com/Dongguk-ICE/SPOT-Frontend/dev/client/src/assets/images/${props.src}`}
        alt={props.alt}
        height={props.height}
        width={props.width}
        onClick={props.onClick}
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
};
