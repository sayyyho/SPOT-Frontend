import * as S from './Parking.styled';
import ParkingImage from '../../assets/images/Parking.png';
import Box from '../Box';
import Text from '../Common/Text';
import {useCallback, useRef, useState} from 'react';
import {spotUpload} from '@/apis/spotUpload';

const Parking = ({greyBoxStyle, onPrevClick}) => {
  const inputRef = useRef();
  const [imageSrc, setImageSrc] = useState('');
  const [imgFlag, setimgFlag] = useState(false);

  const onUploadImage = useCallback(async (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result); // 파일의 컨텐츠
      };
      setimgFlag(true);
      console.log(file);
    }
  }, []);

  const handleClick = () => {
    inputRef.current.click(imageSrc);
  };

  const handleButtonClick = async () => {
    const res = await spotUpload(imageSrc);
    console.log(res);
  };

  return (
    <S.Container>
      <Box style={greyBoxStyle}>
        <S.ImageContainer onClick={handleClick}>
          {imgFlag ? (
            <img src={imageSrc} alt="upload" />
          ) : (
            <img src={ParkingImage} alt="주차 이미지" />
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
            <Text color="white" isFlex={true} onClick={handleButtonClick}>
              제출하기
            </Text>
          </Box>
        </S.BoxContainer>
      </Box>
    </S.Container>
  );
};

export default Parking;
