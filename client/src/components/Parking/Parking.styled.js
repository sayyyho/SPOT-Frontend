import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  img {
    width: 100%;
    height: 88%;
    object-fit: cover;
  }
`;
export const BoxContainer = styled.div `
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 37%;
  margin-top: 8%;
  margin-bottom: 13%;
`