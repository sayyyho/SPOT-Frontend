import * as S from "./Find_1.styled";
import Box from "../../Box";
import Text from "../Text";
import { useState } from "react";

const Find_1 = ({ onNextClick, greyBoxStyle }) => {
    const [content, setContent] = useState('');
  
    const handleChange = (e) => {
      setContent(e.target.value);
    };
  return (
    <S.Container>
       <Box style={greyBoxStyle} width="100%">
            <S.AdditionalText><h3>킥보드 종류</h3></S.AdditionalText>
            <Box width="100%" height="10%" border="1px solid #ccc" borderRadius="20px">
                <textarea
                    value={content}
                    onChange={handleChange}
                    placeholder="Swing"
                    style={{ width: '100%', height: '100%', border: 'none', resize: 'none', outline: 'none', marginBottom: '3%' }}
                />
            </Box>
            <S.AdditionalText><h3>주행 거리</h3></S.AdditionalText>
            <Box width="100%" height="10%" border="1px solid #ccc" borderRadius="20px">
                <textarea
                    value={content}
                    onChange={handleChange}
                    placeholder="2.3km"
                    style={{ width: '100%', height: '100%', border: 'none', resize: 'none', outline: 'none', marginBottom: '3%' }}
                />
            </Box>
            <S.AdditionalText><h3>주행 시간</h3></S.AdditionalText>
            <Box width="100%" height="10%" border="1px solid #ccc" borderRadius="20px">
                <textarea
                    value={content}
                    onChange={handleChange}
                    placeholder="4 min"
                    style={{ width: '100%', height: '100%', border: 'none', resize: 'none', outline: 'none'}}
                />
            </Box>
            </Box>
        <Box
              width="35%"
              height="2.5rem"
              radius="7px"
              background="#3A5AFE"
              isFlex={true}
              onClick={onNextClick}
            >
              <Text color="white" isFlex={true} 
                style={{ cursor: 'pointer'}}>
                다음
              </Text>
        </Box>
        <Box margin="10%" />
    </S.Container>
  );
};

export default Find_1;