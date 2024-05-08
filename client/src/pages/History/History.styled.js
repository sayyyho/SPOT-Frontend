import styled from "styled-components";

export const Container = styled.div`
  width: 94%;
  height: 70vh;
  margin: 0 3% 0 3%;
  display: flex;  
  flex-direction: column;
  align-items: center;  
`;

export const Title = styled.p`
  font-size: 1.75rem;  
  margin-top: 0;  
`;

export const BoardHistoryCard = styled.div`
  display: flex;
  justify-content: center;
  background-color: #EDEDED;
  width: 100%;  
  height: 40%;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 `;

export const BoardHistoryCardContent = styled.p`
  font-size: 1.75rem;
  align-content: center;
`;
