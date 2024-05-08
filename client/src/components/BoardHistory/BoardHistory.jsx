import * as S from './BoardHistory.styled';
import PropTypes from "prop-types";
import PointIcon from '@/assets/images/point.png';

const BoardHistory = (props) => {
  return (
    <S.Container>
      <S.BoardImage src={props.boardHistory.image} alt={"사진"} />
      <S.InfoWrapper>
        <S.Date>{props.boardHistory.createdAt}</S.Date>
        <S.Contents>
          {props.boardHistory.distance}
          {props.boardHistory.time}
        </S.Contents>
      </S.InfoWrapper>
      <S.PointBoxWrapper>
        <S.PointBox>
          <S.PointImage src={PointIcon} alt={"포인트 사진"} />
          <S.Point>{props.boardHistory.point}</S.Point>
        </S.PointBox>
      </S.PointBoxWrapper>
    </S.Container>
  );
}

BoardHistory.propTypes = {
  boardHistory: PropTypes.object.isRequired,
};

export default BoardHistory;
