import styled, {keyframes} from 'styled-components';

// 회전 애니메이션 생성
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 스피너 컴포넌트 스타일
export const SpinnerContainer = styled.div`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 3px solid #f3f3f3; /* 회색 테두리 */
  border-top: 3px solid #3498db; /* 파란색 테두리 */
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite; /* 회전 애니메이션 적용 */
`;
