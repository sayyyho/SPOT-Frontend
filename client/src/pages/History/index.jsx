import * as S from './History.styled';
import Layout from '@/components/Common/Layout/Layout.jsx';
import {useBoardHistory} from '@/hooks/useBoardHistory.js';
import BoardHistoryList from '@/components/BoardHistory/BoardHistoryList/BoardHistoryList.jsx';

const History = () => {
  const {boardHistoryListValue, personInfo} = useBoardHistory();
  console.log(personInfo);
  return (
    <Layout showHeader={true} headerItem="arrow">
      {personInfo && (
        <S.Container>
          <h2>탑승 이력 조회하기</h2><br />
          <S.BoardHistoryCard>
            <S.BoardHistoryCardContent>
              <b>{personInfo.nickname}</b>님,
              <br />
              <b>{personInfo.recordCount}번</b>의 탑승 이력이 있어요.
              <br />총 <b>{personInfo.point}포인트</b>를 적립했어요!
            </S.BoardHistoryCardContent>
          </S.BoardHistoryCard>
          <BoardHistoryList boardHistoryListValue={boardHistoryListValue} />
        </S.Container>
      )}
    </Layout>
  );
};

export default History;
