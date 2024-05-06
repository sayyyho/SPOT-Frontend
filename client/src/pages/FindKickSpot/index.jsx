import Parking from "../../components/Parking";
import ParkText from "../../components/ParkText";
import * as S from "./FindKickSpot.styled";

function FindKickSpot() {
  return (
    <S.Container>
        <ParkText></ParkText>
        <Parking></Parking>
    </S.Container>
  );
}

export default FindKickSpot;
