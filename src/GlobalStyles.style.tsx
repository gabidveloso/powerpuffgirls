import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


:root{
    /* Set project colours */
    --primary: 336, 21%, 30%;
    --secondary: 327, 100%, 57%;
    --black: 60, 13%, 9%;
    --white: 36, 100%, 99%;

      /* Fonts size */
    --notfound_title_font: 6rem;  
    --notfound_description_font: 2.2rem;
    --header_font: 5rem;
    --subtitle_font: 2.6rem;
    --button_font: 1.8rem;

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
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
