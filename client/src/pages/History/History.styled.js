import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BoardHistoryCard = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ededed;
  width: 80%;
  height: 40%;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const BoardHistoryCardContent = styled.p`
  font-size: 1.25rem;
  align-content: center;
`;
