// Import Packages
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardStyle = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: transparent;
  transition: ease-in-out 0.2s all;

  &:hover {
    transform: scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px);
  }

  .top {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .line {
      display: flex;
      gap: 0.8rem;
      align-items: flex-start;

      span {
        font-size: var(--medium_font);
        text-decoration: none;
        color: hsl(var(--white));
      }

      .number,
      .date {
        font-size: var(--small_font);
        color: hsla(var(--white), 0.6);
        font-weight: var(--font_w_xlight);
      }
    }
  }
`;

export default CardStyle;
