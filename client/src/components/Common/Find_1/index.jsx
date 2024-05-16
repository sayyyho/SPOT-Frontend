import * as S from './Find_1.styled';
import Box from '../../Box';
import Text from '../Text';
import {FindItem} from './FindItem';

const Find_1 = ({inputs, onInputChange, onNextClick}) => {
  return (
    <S.Container>
      <Box width="100%" height="78%">
        <S.AdditionalText>
          <h3 style={{marginBottom: '0.5rem'}}>킥보드 종류</h3>
        </S.AdditionalText>
        <FindItem
          placeholder="ex) Swing"
          name="kickType"
          value={inputs.kickType}
          onChange={onInputChange}
        />
        <S.AdditionalText>
          <h3 style={{marginBottom: '0.5rem'}}>주행 거리 (단위 : km)</h3>
        </S.AdditionalText>
        <FindItem
          placeholder="ex) 1.6"
          name="distance"
          value={inputs.distance}
          onChange={onInputChange}
        />
        <S.AdditionalText>
          <h3 style={{marginBottom: '0.5rem'}}>주행 시간 (단위 : 분)</h3>
        </S.AdditionalText>
        <FindItem
          placeholder="ex) 7"
          name="time"
          value={inputs.time}
          onChange={onInputChange}
        />
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
