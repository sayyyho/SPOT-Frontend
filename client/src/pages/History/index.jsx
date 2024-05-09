import * as S from './History.styled';
import Layout from '@/components/Common/Layout/Layout.jsx';
import {useBoardHistory} from '@/hooks/useBoardHistory.js';
import BoardHistoryList from '@/components/BoardHistory/BoardHistoryList/BoardHistoryList.jsx';

const History = () => {
  const {boardHistoryListValue, personInfo} = useBoardHistory();

  return (
    <Layout showHeader={true}>
      <S.Container>
        <S.Title>탑승 이력 조회하기</S.Title>
        <S.BoardHistoryCard>
          <S.BoardHistoryCardContent>
            {personInfo.nickname}님,
            <br />
            {personInfo.recordCount}번의 탑승 이력이 있어요.
            <br />총 {personInfo.point}포인트를 적립했어요!
          </S.BoardHistoryCardContent>
        </S.BoardHistoryCard>
        <BoardHistoryList boardHistoryListValue={boardHistoryListValue} />
      </S.Container>
    </Layout>
  );
};

export default History;
