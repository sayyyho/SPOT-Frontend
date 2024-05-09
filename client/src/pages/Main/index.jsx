import Layout from '@/components/Common/Layout/Layout';
import Box from '@/components/Box';
import Text from '@/components/Common/Text';
import {Image} from '@/components/Common/Image';
import {useNavigate} from 'react-router-dom';
import Spinner from '@/components/Common/Spinner';
import useGeolocation from '@/hooks/useGeoLocation';
import {Wrapper} from '@/components/Common/Wrapper';

export const Main = () => {
  const {loc, dong, temp, humidity, point, pm10, pm25} = useGeolocation();
  const navigate = useNavigate();
  const handleClick = (location) => {
    navigate(location);
  };
  return (
    <>
      {(loc && dong) || localStorage.getItem('latitude') ? (
        <Layout showHeader={true} headerItem="location" gap="1rem" dong={dong}>
          <Box
            width="90%"
            height="45vh"
            radius="1rem 1rem 1rem 1rem"
            background="#3A5AFE"
            isFlex={true}
            flexDirection="column"
            alignProp="center"
            margin="0 0 1rem 0"
          >
            <Box width="90%" height="40%" isFlex={true}>
              <Box width="78%" isFlex={true} flexDirection={'column'}>
                <Text color="white"fontSize='19px'>공유 킥보드로 만들어가는</Text>
                <Text color="white"fontSize='19px'>스마트 에코 도시</Text>
              </Box>
              <Box
                width="25%"
                isFlex={true}
                flexDirection={'column'}
                alignProp="center"
                justifyProp="center"
              >
                <Box
                  width="100%"
                  height="50%"
                  isFlex={true}
                  alignProp={'center'}
                  justifyProp="center"
                >
                  <Image src="temp.png" height="50%" />
                  <Text color="white" fontSize="0.6rem">
                    {temp + '도'}
                  </Text>
                </Box>
                <Box
                  width="100%"
                  height="50%"
                  padding="0 0 0 0.3rem"
                  isFlex={true}
                  alignProp={'center'}
                  justifyProp="center"
                >
                  <Image src="humidity.png" height="50%" />
                  <Text margin="0 0 0 0.2rem" color="white" fontSize="0.6rem">
                    {humidity + '%'}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              width="90%"
              height="58%"
              isFlex={true}
              // padding={'1rem 0 0 0'}
              flexDirection="column"
              alignProp="center"
            >
              <Image src="forest.png" height={'74px'} />
              <Box
                width="60%"
                height="2.5rem"
                radius="7px"
                background="#F8F8FA"
                isFlex={true}
                alignProp="center"
                isCursor={true}
                onClick={() => {
                  handleClick('/history');
                }}
              >
                <Text color="blue" isFlex={true}>
                  탑승 이력
                </Text>
              </Box>
            </Box>
            <Box
              width="100%"
              height="12vh"
              radius="1rem 1rem 1rem 1rem"
              background="#F8F8FA"
              isFlex={true}
              alignProp="center"
            >
              <Box
                width="30%"
                height="100%"
                isFlex={true}
                flexDirection="column"
                alignProp={'center'}
              >
                <Text isFlex={true}>포인트</Text>
                <Text isFlex={true}>{point}</Text>
              </Box>
              <Box
                width="30%"
                height="100%"
                isFlex={true}
                flexDirection="column"
                alignProp={'center'}
              >
                <Text isFlex={true}>미세먼지</Text>
                <Text isFlex={true} color="blue">
                  {pm10}
                </Text>
              </Box>
              <Box
                width="30%"
                height="100%"
                isFlex={true}
                flexDirection="column"
                alignProp={'center'}
              >
                <Text isFlex={true}>초미세먼지</Text>
                <Text isFlex={true} color="red">
                  {pm25}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box width="90%" height="20vh" isFlex={true} gapProp="1rem">
            <Box
              width="45%"
              radius="20px"
              background="#F8F8FA"
              isFlex={true}
              flexDirection="column"
              alignProp="center"
              isCursor={true}
              onClick={() => {
                handleClick('/findSpot');
              }}
            >
              <Text isFlex={true} margin="0 0 0.2rem 0">
                주차장 찾기
              </Text>
              <Image src="map.png" />
            </Box>
            <Box
              width="45%"
              radius="20px"
              background="#F8F8FA"
              isFlex={true}
              flexDirection="column"
              alignProp="center"
              isCursor={true}
              onClick={() => {
                handleClick('/finishSpot');
              }}
            >
              <Text isFlex={true} margin="0 0 0.2rem 0">
                주차 인증하기
              </Text>
              <Image src="auth.png" />
            </Box>
          </Box>
          <Box
            width="85%"
            height="10vh"
            isFlex={true}
            gapProp="1rem"
            radius="20px"
            background="#F8F8FA"
          >
            <Box width="20%" isFlex={true} alignProp="center">
              <Image src="report.png" />
            </Box>
            <Box
              width="80%"
              isFlex={true}
              flexDirection="column"
              isCursor={true}
              onClick={() => {
                location.href =
                  'https://seoul-pm.eseoul.go.kr/mobile/report/qrcode.do';
              }}
            >
              <Text isFlex={true}>불법 주차 킥보드 신고하기</Text>
              <Text fontSize="9px" isFlex={true}>
                횡단보도, 건물 앞에 무단 주차한 킥보드를 제보해주세요
              </Text>
            </Box>
          </Box>
        </Layout>
      ) : (
        <Wrapper>
          <Spinner size={50}></Spinner>
          <Text isFlex={true} color="blue" margin="1rem 0 0 0">
            현재 위치를 불러오는 중...
          </Text>

        </Wrapper>
      )}
    </>
  );
};
