import styled from 'styled-components';

export const Image = styled.img`
  height: ${(props) => (props.height ? `${props.height}` : '50%')};
  display: inline-block;
`;
