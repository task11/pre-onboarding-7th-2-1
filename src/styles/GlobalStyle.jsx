import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
