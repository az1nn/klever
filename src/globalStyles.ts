import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-family: 'Kanit', sans-serif;
    font-size: 1.2rem;
}

a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Kanit', sans-serif;
}

* {
    box-sizing: border-box;
}
button {
    font-family: 'Kanit', sans-serif;
}
`;

 
export default GlobalStyles;