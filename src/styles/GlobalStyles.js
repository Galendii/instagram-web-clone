const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`


    body{
        margin: 0;
        width: 100%;
        height: 100%;
        overflow-x:hidden;
        overflow-y:auto;
        color: var(--dark);
        font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    }
    span{
        color: var(--dark);
    }


    :root{
        --primary: #fff;
        --secondary: #FAFAFA;
        --stories: #DC438B;
        --red: #ED4956;
        --besties: #69D134;
        --gray: #8E8E8E;
        --light-gray: #dbdbdb;
        --dark: #262626;
        --blue: #0095F6;
    }



`;

export default GlobalStyle;
