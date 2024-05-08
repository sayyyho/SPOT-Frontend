import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 5%;
  padding: 5%;  
  background-color: #EEF1F4;  
  border-radius: 10px;  
`;

export const BoardImage = styled.img`
  width: 30%;
  height: 30%;  
  border-radius: 10px;  
`;

export const InfoWrapper = styled.div`
  display: block;
  margin-left: 5%;  
`;

export const Date = styled.span`
  color: #979797;
  font-size: 0.75rem;  
`;

export const Contents = styled.div`
  margin-top: 10%;
`;

export const PointBoxWrapper = styled.div`
  width: 20%;  
  margin-left: 10%;
  display: flex;
  align-items: center;  
`;

export const PointBox = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;  
  height: 40%;  
  width: 100%;  
  border: #1877F2 2px solid;  
  border-radius: 10px;  
`;

export const PointImage = styled.img`
`;

export const Point = styled.p`
  color: #1877F2;
  margin-left: 3%;  
`;