import styled from 'styled-components';

const DetailInfoStyle = styled.section`
  display: flex;
  align-items: flex-end;
  background-color: hsl(var(--pure_black));
  position: relative;
  height: 48rem;

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

    .line {
      display: flex;
      align-items: center;
      gap: 1rem;

      .date-season {
        display: flex;
        gap: 0.6rem;

        .separtor {
          background: var() (hsl);
        }
      }
    }
  }
`;

export default DetailInfoStyle;
