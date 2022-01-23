// Import Packages
import styled from 'styled-components';

const ButtonHomeStyle = styled.button`
  position: absolute;
  top: 3rem;
  left: 4rem;
  z-index: 9;
  padding: 1rem 1.2rem;
  text-decoration: none;
  background-color: hsla(var(--grey), 0.4);
  border: 0;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ease-in 0.2s background;

  .hover {
    max-width: 0;
    transition: max-width 1s;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    color: hsl(var(--white));
    font-weight: var(--font_w_regular);
  }

  svg {
    width: 2rem;
    height: 2rem;
    path {
      fill: hsl(var(--white));
    }
  }

  &:hover,
  &:active {
    background-color: hsla(var(--primary), 0.8);
    gap: 1rem;
    .hover {
      max-width: fit-content;
    }
  }
`;

export default ButtonHomeStyle;
