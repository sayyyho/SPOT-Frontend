import Layout from '@/components/Common/Layout/Layout';
import Box from '@/components/Box';
import Text from '@/components/Common/Text';
import {Image} from '@/components/Common/Image';

export const Main = () => {
  return (
    <Layout
      showHeader={true}
      headerItem="location"
      isBetween={false}
      gap="1rem"
    >
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
        <Box width="90%" height="30%" isFlex={true}>
          <Box width="75%" isFlex={true} flexDirection={'column'}>
            <Text color="white">공유 킥보드로 만들어가는</Text>
            <Text color="white">스마트 에코 도시</Text>
          </Box>
          <Box width="25%" isFlex={true} flexDirection={'column'}>
            <Box width="100%" isFlex={true} alignProp={'center'}>
              <Image src="temp.png" />
              <Text color="white">17도</Text>
            </Box>
            <Box width="100%" isFlex={true} alignProp={'center'}>
              <Image src="humidity.png" />
              <Text color="white">30%</Text>
            </Box>
          </Box>
        </Box>
        <Box
          width="90%"
          height="65%"
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
            <Text isFlex={true}>350점</Text>
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
              보통
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
              나쁨
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
        >
          <Text isFlex={true}>주차장 찾기</Text>
        </Box>
        <Box width="45%" radius="20px" background="#F8F8FA"></Box>
      </Box>
      <Box
        width="85%"
        height="10vh"
        isFlex={true}
        gapProp="1rem"
        radius="20px"
        background="#F8F8FA"
      ></Box>
    </Layout>
  );
};
