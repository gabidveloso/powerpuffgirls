// Import Packages
import styled from 'styled-components';

const TabsStyle = styled.section`
  width: 100%;
  display: flex;
  background-color: hsl(var(--black));
  padding: 1rem 4rem;
  gap: 2rem;

  button {
    appearance: none;
    border: 0;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    font-size: var(--button_font);
    font-weight: var(--font_w_regular);
    color: hsl(var(--white));
    transition: ease-in-out color 0.2s;

    &:hover {
      color: hsl(var(--primary));
    }

    &.active {
      color: hsl(var(--secondary));
    }
  }
`;

export default TabsStyle;
