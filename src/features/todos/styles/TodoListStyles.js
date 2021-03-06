import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.25;
`;

export const TodosWrapper = styled.div`
  display: flex;
  flex: 0.5;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 25px;
  }

  @media screen and (max-width: 460px) {
    width: 290px;
  }
`;
