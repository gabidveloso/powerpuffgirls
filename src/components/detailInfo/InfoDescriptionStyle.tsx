// Import Packages
import styled from 'styled-components';

// Import Device sizes set in global style
import { device } from '../../GlobalStyles.style';

const InfoDescriptionStyle = styled.span`
  display: flex;
  width: 60%;
  color: hsl(var(--white));
  font-size: var(--medium_font);
  font-weight: var(--font_w_xlight);

  p {
    font-weight: var(--font_w_xlight);
  }

  p,
  b {
    font-size: var(--medium_font);
  }

  /* Set Media Queries */

  @media ${device.tablet} {
    width: 100%;
  }
`;

export default InfoDescriptionStyle;
