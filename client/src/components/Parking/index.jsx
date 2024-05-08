import * as S from "./Parking.styled";
import ParkingImage from "../../assets/images/Parking.png";

function Parking() {
  return (
    <S.Container>
      <S.StyledImage src={ParkingImage}></S.StyledImage>
    </S.Container>
  );
}

export default Parking;
