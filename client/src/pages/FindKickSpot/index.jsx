import * as S from "./FindKickSpot.styled";
import Parking from "../../components/Parking";
import ParkText from "../../components/ParkText";
import Circle from "../../components/Circle";
import stepimage from "../../assets/images/step1.png";
import stepimage2 from "../../assets/images/step2.png";

function FindKickSpot() {
  return (
    <S.Container>
        <ParkText></ParkText>
        <Parking></Parking>
        <S.CircleContainer>
            <Circle image={stepimage} />
            <Circle image={stepimage2} />
        </S.CircleContainer>
    </S.Container>
  );
}
export default FindKickSpot;

