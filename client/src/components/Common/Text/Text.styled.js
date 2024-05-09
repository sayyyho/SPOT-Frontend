import styled from 'styled-components';

export const Text = styled.div`
  width: 80%;
  display: ${(props) => (props.isFlex ? 'flex' : 'block')};
  justify-content: ${(props) =>
    props.isFlex ? 'center' : 'flex-start'}; // 변경
  align-items: ${(props) => (props.isFlex ? 'center' : 'stretch')}; // 변경
  flex-direction: ${(props) =>
    props.flexDirection || 'row'}; // flex-direction 기본값 설정
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? `${props.margin}` : '0')};  
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '1rem')};
`;
