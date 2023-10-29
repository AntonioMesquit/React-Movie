import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas: "header" "home";

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 20px;
  }
`;
