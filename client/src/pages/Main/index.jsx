import Layout from '@/components/Common/Layout/Layout';
import Box from '@/components/Box';
import Text from '@/components/Common/Text';

export const Main = () => {
  return (
    <Layout showHeader={true} headerItem="location">
      <Box
        width="90%"
        height="30vh"
        radius="1rem 1rem 1rem 1rem"
        background="#3A5AFE"
        isFlex={true}
      >
        <Box width="90%" height="30%" isFlex={true}>
          <Box width="80%" isFlex={true} flexDirection={'column'}>
            <Text color="white">공유 킥보드로 만들어가는</Text>
            <Text color="white">스마트 에코 도시</Text>
          </Box>
          <Box width="20%"></Box>
        </Box>
      </Box>
    </Layout>
  );
};
