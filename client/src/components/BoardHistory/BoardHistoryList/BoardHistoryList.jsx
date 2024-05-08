import BoardHistory from "@/components/BoardHistory/BoardHistory.jsx";
import * as S from "./BoardHistoryList.styled";

const BoardHistoryList = (props) => {
  return (
    <S.Container>
      {props.boardHistoryListValue.map((boardHistory, index) => (
        <BoardHistory key={index} boardHistory={boardHistory} />
      ))}
    </S.Container>
  );
}

export default BoardHistoryList;
