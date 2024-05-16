import {useState, useCallback} from 'react';
import * as S from './FinishSpot.styled';
import Parking from '../../components/Parking';
import Layout from '@/components/Common/Layout/Layout';
import Box from '@/components/Box';
import Find_1 from '@/components/Common/Find_1';
import {spotUpload} from '@/apis/spotUpload';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const FinishSpot = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState({
    kickType: '',
    distance: '',
    time: '',
  });
  const [imageSrc, setImageSrc] = useState('');
  const [imgFlag, setImgFlag] = useState(false);
  const [reqImg, setReqImg] = useState('');

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleNextClick = () => {
    if (inputs.kickType && inputs.distance && inputs.time) {
      setStep(step + 1);
    } else {
      Swal.fire({
        title: '모든 항목을 입력해주세요!',
        icon: 'error',
        confirmButtonColor: '#ed8b00',
      });
    }
  };

  const handlePrevClick = () => {
    if (step === 2) {
      setStep(step - 1);
    }
  };

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      setReqImg(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      setImgFlag(true);
    }
  }, []);

  const handleButtonClick = async () => {
    const data = {
      ...inputs,
    };
    Swal.fire({
      title: '이미지 판별중...',
      text: '잠시만 기다려 주세요.',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await spotUpload(reqImg, data);

      if (res.data.success) {
        Swal.fire({
          title: '주차 인증 완료!',
          text: '메인 페이지로 넘어갑니다.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
          timerProgressBar: true,
        }).then(() => {
          navigate('/');
        });
      } else {
        Swal.fire({
          title: '킥보드 상태를 확인해주세요!',
          icon: 'error',
          confirmButtonColor: '#ed8b00',
        });
      }
    } catch (error) {
      Swal.fire({
        title: '킥보드 상태를 확인해주세요!',
        icon: 'error',
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
        <Box margin="18px" />
        <Box style={greyBoxStyle}>
          {step === 1 && (
            <Find_1
              inputs={inputs}
              onInputChange={handleInputChange}
              onNextClick={handleNextClick}
              greyBoxStyle={greyBoxStyle}
            />
          )}
          {step === 2 && (
            <Parking
              imageSrc={imageSrc}
              imgFlag={imgFlag}
              onUploadImage={onUploadImage}
              onSubmit={handleButtonClick}
              onPrevClick={handlePrevClick}
              greyBoxStyle={greyBoxStyle}
            />
          )}
        </Box>
      </S.Container>
    </Layout>
  );
};

export default FinishSpot;
