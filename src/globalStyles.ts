import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

* {
    box-sizing: border-box;
}
`;

 
export default GlobalStyles;