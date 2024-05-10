import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.isBetween ? 'space-between' : 'center'}; 
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}` : 0)};
`;
