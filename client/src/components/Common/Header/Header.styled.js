import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.5rem 0 0 0.5rem;
  width: 90%;
  height: 7vh;
  display: flex;
  position: ${(props) => (props.isAbsolute ? 'absolute' : 'static')};
  z-index: 999;
  align-items: center;
`;
