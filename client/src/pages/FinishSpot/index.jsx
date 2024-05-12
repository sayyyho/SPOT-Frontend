import {useState} from 'react';
import * as S from './FinishSpot.styled';
import Parking from '../../components/Parking';
import Layout from '@/components/Common/Layout/Layout';
import Box from '@/components/Box';
import Find_1 from '@/components/Common/Find_1';
import {spotUpload} from '@/apis/spotUpload';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const FindKickSpot = () => {
  const navigation = useNavigate();
  const [showParking, setShowParking] = useState(false);
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setShowParking(true);
    setStep(step + 1);
  };

  const handlePrevClick = () => {
    if (step === 2) {
      setStep(step - 1);
    }
  };

  const handleButtonClick = async (reqImg) => {
    try {
      const res = await spotUpload(reqImg);
      if (res.data.success) {
        Swal.fire({
          title: `주차 인증 완료!`,
          text: '메인 페이지로 넘어갑니다.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then(() => {
          navigation('/');
        });
      } else {
        Swal.fire({
          title: '킥보드 상태를 확인해주세요!',
          icon: `error`,
          confirmButtonColor: '#ed8b00',
        });
      }
    } catch (error) {
      Swal.fire({
        title: '킥보드 상태를 확인해주세요!',
        icon: `error`,
        confirmButtonColor: '#ed8b00',
      });
    }
  };

  const greyBoxStyle = {
    width: '70%',
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-between',
    backgroundColor: '#EDEDED',
    borderRadius: '20px',
    padding: '1rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  };

  return (
    <Layout showHeader={true} headerItem="arrow">
      <S.Container>
        <h2>주차 인증하기</h2>
        {showParking ? (
          <S.AdditionalText>주차 사진 업로드</S.AdditionalText>
        ) : (
          <Box margin="18px" />
        )}
        <Box style={greyBoxStyle}>
          {showParking ? (
            <>
              {step === 1 && <Find_1 onNextClick={handleNextClick} />}
              {step === 2 && (
                <Parking
                  onPrevClick={handlePrevClick}
                  onSubmit={handleButtonClick}
                />
              )}
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
