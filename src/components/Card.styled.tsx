import styled from "styled-components";
import { myTheme } from "../styles/Them.styled";

export const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  position: absolute;

  box-shadow: 0px 4px 20px 5px #0000001a;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${myTheme.colors.primary};

  h1 {
    font-family: Intel;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.36px;
    text-align: left;

    width: 70px;
    height: 19px;
    margin-top: 10px;
    margin-left: 20px;
    gap: 0px;
    opacity: 0px;
  }

  p {
    width: 260px;
    height: 40px;
    gap: 0px;
    opacity: 0px;
    color: #abb3ba;

    margin-left: 20px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }
`;
