import styled from "styled-components";
import { myTheme } from "../styles/Them.styled";

export const Btn1 = styled.button`
  background-color: ${myTheme.colors.secondary};
  color: ${myTheme.colors.primary};
  border: none;
  width: 86px;
  height: 30px;
  margin-left: 20px;
  gap: 0px;
  border-radius: 5px;
  opacity: 0px;

  font-family: Inter;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
`;

export const Btn2 = styled(Btn1)`
  background-color: ${myTheme.colors.primary};
  border: 2px solid ${myTheme.colors.secondary};
  color: ${myTheme.colors.secondary};
  width: 86px;
  height: 30px;
  border-radius: 5px;
`;
