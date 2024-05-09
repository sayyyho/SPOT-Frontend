import styled from 'styled-components';

export const Image = styled.img`
  height: ${(props) => (props.height ? `${props.height}` : '50%')};
  width: ${(props) => `${props.width}`};
  display: inline-block;  
`;
