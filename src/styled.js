import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: NexaHeavy;
    src: url(./assets/fonts/nexa-heavy-webfont.woff);
  }
  
  @font-face {
    font-family: NexaLight;
    src: url(./assets/fonts/nexa-light-webfont.woff);
  }
  
  @font-face {
    font-family: NexaBlack;
    src: url(./assets/fonts/nexa-black-webfont.woff);
  }
  
  @font-face {
    font-family: NexaRegular;
    src: url(./assets/fonts/nexa-regular-webfont.woff2);
  }
  
  @font-face {
    font-family: NexaBold;
    src: url(./assets/fonts/nexa-bold-webfont.woff);
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nexa', 'Josefin Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
