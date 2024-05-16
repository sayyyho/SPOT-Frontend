import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 20px;
`;
export const BoxContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 37%;
  margin-top: 8%;
  margin-bottom: 13%;
`;

export const CustomImg = styled.img`
  /* max-width: 100%; */
  width: 100%;
  max-height: 40vh;
  object-fit: cover;
`;
