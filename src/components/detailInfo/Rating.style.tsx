import styled from 'styled-components';

const RatingStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background-color: hsla(var(--primary), 0.8);
  border-radius: 0.2rem;
  padding: 0.6rem;

  /* Style svg */
  svg {
    width: 1.6rem;
    height: 1.6rem;

    path {
      fill: hsl(var(--white));
    }
  }

  .rating-value {
    .actual {
      color: hsl(var(--white));
      font-size: var(--medium_font);
      font-weight: var(--font_w_regular);
    }

    .max {
      color: hsla(var(--white), 0.4);
    }
  }
`;

export default RatingStyle;
