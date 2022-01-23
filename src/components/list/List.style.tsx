// Import Packages
import styled from 'styled-components';
import { device } from '../../GlobalStyles.style';

const ListStyle = styled.section`
  background-color: hsl(var(--grey));

  .episodes-list {
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .episodes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(22.1rem, 1fr));
      gap: 2rem;
    }
  }

  @media ${device.tablet} {
    .episodes-list {
      padding: 2rem;

      .episodes {
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
      }
    }
  }
`;

export default ListStyle;
