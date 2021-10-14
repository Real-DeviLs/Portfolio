import { ThemeProvider } from "styled-components";
import { theme } from '../utils/theme';
import GlobalStyles  from '../utils/globalStyles'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme = {theme}>
    <GlobalStyles />
  <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
