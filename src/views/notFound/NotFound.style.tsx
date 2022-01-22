import styled from 'styled-components';
import { device } from '../../GlobalStyles.style';

const NotFoundStyle = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  .left {
    width: 56%;
    flex-direction: column;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1,
      .subtitle {
        font-size: var(--notfound_title_font);
      }

      h1 {
        color: hsl(var(--secondary));
        font-weight: var(--font_w_light);
        margin: 0;
      }
      .subtitle {
        position: relative;
        color: hsl(var(--white));
        font-weight: var(--font_w_regular);
        margin-bottom: 4rem;

        &::before {
          content: '';
          position: absolute;
          background-color: hsl(var(--secondary));
          height: 0.4rem;
          width: 6rem;
          bottom: -1.2rem;
        }
      }

      .description {
        color: hsl(var(--primary));
        font-weight: var(--font_w_light);
        font-size: var(--notfound_description_font);
      }
      .btn {
        display: flex;
        padding-top: 2rem;
      }
    }
  }

  .right {
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media ${device.tablet} {
    .left {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 6rem 4rem 1rem;
    }
    .right {
      padding-bottom: 6rem;
    }
  }

  @media ${device.mobileL} {
    .btn {
      width: 100%;

      a {
        width: 100%;
      }
    }
  }
`;

export default NotFoundStyle;
