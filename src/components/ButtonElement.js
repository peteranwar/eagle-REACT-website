import styled from "styled-components";
import { Link } from "react-scroll";
import * as palette from "../variables/Variables";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? `${palette.mainColor}` : "#1b1a1a"};
  padding: ${({ big }) => (big ? "15px 45px" : "12px 25px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  color: ${({ dark }) => (dark ? "black" : "white")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ dark }) => (dark ? "white" : "#1b1a1a")};
    background: ${({ primary }) =>
      primary ? "#1b1a1a" : `${palette.mainColor}`};
  }
`;
