import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
    margin:0;
    padding:0;
}

body{
    font-family:"Sirin Stencil";
    overflow:hidden;
}

h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}

a{
    color:inherit;
    text-decoration:none;
}
::-webkit-scrollbar {display:none;}

html {
    scroll-behavior: smooth;
  }
  .sc-kLwhqv{
background-color:transparent !important;
border:#fff !important;
  }

  .sc-hiCibw > button{
    background-color:#BA2227 !important;

  }
  .sc-cidDSM{
    background-color:#FFF !important;

  }

  .App{
    position:relative;
  }
  #next,#prev{
    display:none;
  }
`;
export default GlobalStyles;
