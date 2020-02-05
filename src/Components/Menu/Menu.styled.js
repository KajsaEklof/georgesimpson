import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: grey;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};


  a {
    margin: 1em;
    color: #000000;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    text-decoration: none;
    position: relative;
    display: block;

  &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      display: block;
      background: #e54c14;
      transition: width 0.4s ease;
      -webkit-transition: width 0.4s ease;
  }
}
`
