// Import Packages
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* Set CSS Varibles */
:root{
    /* Set project colours */
    --primary: 333, 25%, 46%;
    --secondary: 327, 100%, 57%;
    --black: 60, 13%, 9%;
    --pure_black: 0, 0%, 0%;
    --grey: 60, 3%, 17%;
    --white: 36, 100%, 99%;

      /* Fonts size */
    --notfound_title_font: 6rem;  
    --notfound_description_font: 2.2rem;
    --header_font: 5rem;
    --sub_header_font: 3rem;
    --subtitle_font: 2.6rem;
    --button_font: 1.8rem;
    --medium_font: 1.6rem;
    --small_font: 1.4rem;

    /* Font Family */
    --font_primary: 'Outfit', sans-serif;

    /* Font weight */
    --font_w_xlight: 200;
    --font_w_light: 300;
    --font_w_regular: 400;

}


    /**Normalization */
    *{
        box-sizing: border-box;
        font-size: 10px;
        font-family: var(--font_primary);
    }


    body{
        background-color: hsl(var(--black));
    }
`;

export default GlobalStyles;

/* Media Queries Sizes */
const size = {
  mobileL: '425px',
  tablet: '768px',
};
export const device = {
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
};
