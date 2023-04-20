import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 120px;
  padding: 20px 7%;

  background-color: ${({ theme }) => theme.colors.first.main};
`;
