import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GrayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 63%;
  height: 90%;
  background-color: #EDEDED;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const BoxContainer = styled.div `
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10%;
`