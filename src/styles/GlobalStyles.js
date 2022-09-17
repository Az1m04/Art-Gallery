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

  .btn {
    background-color:#BA2227 !important;
    padding:0.5rem;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
  }
  



  .App{
    position:relative;
  }
  #next,#prev{
    display:none;
  }
.jhMJsX{
  background-color:#fff !important;
  border-raddius:50% !important;
  height:5px !important;
  width:5px !important;
}

@media only screen and (min-width: 320px) {
  .gqPMbx {
    flex-wrap:wrap !important;
    
  }
  .gqPMbx img{
    width:60% !important;
    height:40% !important;
  }
  .iPTzHl{
    min-height:340vh !important;
  }

   .bnbbOb {
    top:15% !important;
  }
  .ixIFVR{
margin-top:-10rem !important;
  }
}

@media only screen and (min-width: 480px) {
  .gqPMbx {
    flex-wrap:wrap !important;
    
  }
  .gqPMbx img{
    width:60% !important;
    height:40% !important;
  }
  .iPTzHl{
    min-height:340vh !important;
  }

   .bnbbOb {
    top:15% !important;
  }
  .ixIFVR{
margin-top:-10rem !important;
  }
}

@media only screen and (min-width: 600px) {
  .gqPMbx {
    flex-wrap:wrap !important;
    
  }
  .gqPMbx img{
    width:60% !important;
    height:40% !important;
  }
  .iPTzHl{
    min-height:340vh !important;
  }

   .bnbbOb {
    top:15% !important;
  }
  .ixIFVR{
margin-top:-10rem !important;
  }
}

`;
export default GlobalStyles;
