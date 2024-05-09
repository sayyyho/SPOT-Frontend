import * as S from './Image.styled';
import PropTypes from 'prop-types';

export const Image = (props) => {
  return (
    <>
      <S.Image
        src={`/src/assets/images/${props.src}`}
        alt={props.alt}
        height={props.height}
        width={props.width}
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
