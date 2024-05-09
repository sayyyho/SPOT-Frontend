import * as S from "./FinishSpot.styled";
import Parking from "../../components/Parking";
import ParkText from "../../components/ParkText";
import Layout from '@/components/Common/Layout/Layout';

function FindKickSpot() {
  return (
    <Layout showHeader={true} headerItem="arrow">
      <S.Container>
          <ParkText></ParkText>
          <Parking></Parking>
      </S.Container>
    </Layout>
  );
}
export default FindKickSpot;

