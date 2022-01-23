// Import Packages
import styled from 'styled-components';

// Import Device sizes set in global style
import { device } from '../../GlobalStyles.style';

const DetailInfoStyle = styled.section`
  display: flex;
  align-items: flex-end;
  background-color: hsl(var(--pure_black));
  position: relative;
  min-height: 48rem;

  /* background image style */
  .background-img {
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;

    &.ep {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        padding: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: right bottom;
      padding: 3rem 3rem 0;
    }

    .overlay {
      width: 100%;
      height: 100%;
      background-color: hsla(var(--black), 0.5);
      position: absolute;
      top: 0;
    }
  }

  .info {
    z-index: 1;
    width: 100%;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .info-header {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .line {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;

      &.genres {
        gap: 0.2;

        span {
          position: relative;
          &:not(:last-child) {
            ::before {
              content: ',';
              position: absolute;
              right: -0.5rem;
              color: hsl(var(--white));
            }
          }
        }
      }

      .date-season {
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }
    }
  }

  /* Set Media Queries */
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    .background-img {
      position: relative;
      height: 24rem;
      max-height: 40vh;

      img {
        object-position: center;
      }
    }
    .info {
      background-color: hsl(var(--grey));
    }
  }
`;

export default DetailInfoStyle;
