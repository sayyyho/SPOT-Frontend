import { useState } from "react";
import * as S from "./FinishSpot.styled";
import Parking from "../../components/Parking";
import Layout from '@/components/Common/Layout/Layout';
import Find_1 from "@/components/Common/Find_1";
import Box from "@/components/Box";

const FindKickSpot = () => {
  const [showParking, setShowParking] = useState(false);
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setShowParking(true);
    setStep(step + 1);
  };
  const greyBoxStyle = {
    width: '78%',
    height: '66%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-between',
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: '20px',
    padding: '1rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  };  

  return (
    <Layout showHeader={true} headerItem="arrow">
      <S.Container>
        <h2>주차 인증하기</h2><br />
        {showParking ? (<S.AdditionalText><h3>주차 사진 업로드</h3></S.AdditionalText>) : (<Box margin="28px"/>)}
        <Box style={greyBoxStyle}>
          {showParking ? (
            <>
            {step === 1 && <Find_1 onNextClick={handleNextClick} />}
            {step === 2 && <Parking />}
          </>

          ) : (
            <Find_1 onNextClick={handleNextClick} />
          )}
        </Box>
      </S.Container>
    </Layout>
  );
};
export default FindKickSpot;