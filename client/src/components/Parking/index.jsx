import * as S from "./Parking.styled";
import ParkingImage from "../../assets/images/Parking.png";
import Box from "../Box";
import Text from "../Common/Text";
const Parking = () => {
  return (
    <S.Container>
      <S.GrayBox>
        <S.ImageContainer>
          <img src={ParkingImage} alt="주차 이미지" />
        </S.ImageContainer>
        <S.BoxContainer>
          <Box
              width="35%"
              height="2.5rem"
              radius="7px"
              background="#989898"
              isFlex={true}
            >
              <Text color="white" isFlex={true}>
                이전
              </Text>
            </Box>
            <Box
              width="35%"
              height="2.5rem"
              radius="7px"
              background="#3A5AFE"
              isFlex={true}
            >
              <Text color="white" isFlex={true}>
                제출하기
              </Text>
            </Box>
          </S.BoxContainer>
      </S.GrayBox>
    </S.Container>
  );
};

export default Parking;
