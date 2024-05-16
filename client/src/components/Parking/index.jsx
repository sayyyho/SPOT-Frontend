import {useRef} from 'react';
import * as S from './Parking.styled';
import ParkingImage from '../../assets/images/Parking.png';
import Box from '../Box';
import Text from '../Common/Text';

const Parking = ({imageSrc, imgFlag, onUploadImage, onSubmit, onPrevClick}) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <S.Container>
      <Box width="100%">
        <S.ImageContainer onClick={handleClick}>
          {imgFlag ? (
            <S.CustomImg src={imageSrc} alt="upload" />
          ) : (
            <S.CustomImg src={ParkingImage} alt="주차 이미지" />
          )}
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImage}
            style={{display: 'none'}}
          />
        </S.ImageContainer>
        <S.BoxContainer>
          <Box
            width="40%"
            height="2.5rem"
            radius="7px"
            background="#989898"
            isFlex={true}
            onClick={onPrevClick}
          >
            <Text color="white" isFlex={true}>
              이전
            </Text>
          </Box>
          <Box
            width="40%"
            height="2.5rem"
            radius="7px"
            background="#3A5AFE"
            isFlex={true}
          >
            <Text color="white" isFlex={true} onClick={onSubmit}>
              제출하기
            </Text>
          </Box>
        </S.BoxContainer>
      </Box>
    </S.Container>
  );
};

export default Parking;
