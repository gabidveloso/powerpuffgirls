// Import Packages
import styled from 'styled-components';

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
`;

export default ListStyle;
