import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  color: #6b6768;
  font-family: IBM Plex Mono,monospace;
    letter-spacing: -0.015em;
    background: ${props=>props.theme.colors.backgroundLight};
     -ms-word-break: break-all; 
  word-break: break-all; 
  word-break: break-word; /* old webkit */ 
}

a {
  color: inherit;
  text-decoration: none;
}
p{
    font-size:17px;
    color: '#6b6768';
    
}
* {
  box-sizing: border-box;
}

`;

export default GlobalStyles;