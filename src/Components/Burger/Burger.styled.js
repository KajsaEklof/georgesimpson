import styled from "styled-components"
import { device } from "../ComponentStyles/Device"

export const StyledBurger = styled.button`
  position: relative;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9999999;

  @media ${device.desktop} {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translate(-2px, -0px)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translate(0px, -2px)" : "rotate(0)"};
    }
  }
`
