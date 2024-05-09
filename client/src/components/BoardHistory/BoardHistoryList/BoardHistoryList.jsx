import BoardHistory from "@/components/BoardHistory/BoardHistory.jsx";
import * as S from "./BoardHistoryList.styled";
import {Image} from "@/components/Common/Image/index.jsx";
import Text from "@/components/Common/Text/index.jsx";
const BoardHistoryList = (props) => {
  return (
    <S.Container>
      {
        props.boardHistoryListValue.length === 0 ?  (
          <S.NothingWrapper>
            <Text isFlex={true} margin={"0 0 25% 0"} fontSize={"1.25rem"}>탑승 이력이 없습니다.</Text>
            <Image src={"nothingImage.png"} height={"50%"} width={"50%"}/>
          </S.NothingWrapper>
        ) : (
          props.boardHistoryListValue.map((boardHistory, index) => (
            <BoardHistory key={index} boardHistory={boardHistory} />
          ))
        )
      }
    </S.Container>
  );
}

export default BoardHistoryList;
