import * as S from './Find_1.styled';
import Box from '../../Box';
import Text from '../Text';
import {FindItem} from './FindItem';

const Find_1 = ({onNextClick, greyBoxStyle}) => {
  return (
    <S.Container>
      <Box style={greyBoxStyle} width="100%" height="78%">
        <S.AdditionalText>
          <h3>킥보드 종류</h3>
        </S.AdditionalText>
        <FindItem placeholder="Swing" key="0" />
        <S.AdditionalText>
          <h3>주행 거리</h3>
        </S.AdditionalText>
        <FindItem placeholder="2.3km" key="1" />
        <S.AdditionalText>
          <h3>주행 시간</h3>
        </S.AdditionalText>
        <FindItem placeholder="10분" key="2" />
      </Box>
      <Box
        width="35%"
        height="2.5rem"
        radius="7px"
        background="#3A5AFE"
        isFlex={true}
        onClick={onNextClick}
      >
        <Text color="white" isFlex={true} style={{cursor: 'pointer'}}>
          다음
        </Text>
      </Box>
    </S.Container>
  );
};

export default Find_1;
