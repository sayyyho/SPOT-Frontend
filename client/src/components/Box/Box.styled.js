import styled from 'styled-components';

export const Box = styled.div`
  border: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  border-radius: ${(props) => (props.radius ? props.radius : 0)};
  color: ${(props) => (props.color ? props.color : 'black')};
  background-color: ${(props) =>
    props.background ? props.background : 'black'};
`;
