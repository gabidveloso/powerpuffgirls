// Import Packages
import styled from 'styled-components';

const ButtonStyle = styled.a`
  padding: 1.2rem 2rem;
  border-radius: 4rem;
  color: hsl(var(--white));
  text-align: center;
  text-decoration: none;
  font-size: var(--button_font);
  font-weight: var(--font_w_light);
  background-color: hsl(var(--primary));
  transition: ease-in-out 1s background;

  &:hover,
  &:active {
    background-color: hsla(var(--secondary), 0.8);
  }
`;

export default ButtonStyle;
