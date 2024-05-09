import Layout from '@/components/Common/Layout/Layout';
import Box from '@/components/Box';
import Text from '@/components/Common/Text';
import {Image} from '@/components/Common/Image';

export const Main = () => {
  return (
    <Layout showHeader={true} headerItem="location">
      <Box
        width="90%"
        height="40vh"
        radius="1rem 1rem 1rem 1rem"
        background="#3A5AFE"
        isFlex={true}
        flexDirection="column"
        alignProp="center"
      >
        <Box width="90%" height="30%" isFlex={true}>
          <Box width="80%" isFlex={true} flexDirection={'column'}>
            <Text color="white">공유 킥보드로 만들어가는</Text>
            <Text color="white">스마트 에코 도시</Text>
          </Box>
          <Box width="20%" isFlex={true} flexDirection={'column'}>
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
          flexDirection="column"
          alignProp="center"
          margin="auto 0 0 0"
        ></Box>
      </Box>
    </Layout>
  );
};
