import { css } from "@emotion/react";

export const body = css`
width:100vw;
height: 100vh;
background-size: cover;
background-image: url('/imgs/main.png');
`

export const headerBox = css`
width: 100vw;
height: 5vh;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const logoBox = css`
width: 5vw;
height: 5vh;
background-image: url('/imgs/logo.svg'); 
background-size: contain; 
background-repeat: no-repeat; 
background-position: center; 
z-index: 300;
margin-left: 2%;
`;

export const infoBox = css`
margin-right: 2%;
//background-color:black;
z-index:300;
`;
export const infoButton = css`
margin-right: 10px;
border: none; 
background-color: lightgray; 
color: black;
cursor: pointer; 
`;


export const categoryBox = css`
width: 10vw;
height: 50vh;
position: fixed;
top: 40px;
font-size: 80%;
padding: 20px 0;
z-index: 80;
`;

export const categoryButton = css`
display: block;
padding: -3% 0;
margin-bottom: 5%;
margin-left: 20%;
color: black;
text-decoration: none;
`;


export const footerBox= css`
width: 100vw;
height: 10vh;
text-align: left;
line-height: 1.5;
position: absolute;
bottom: 0;
left: 0;
float: left;
z-index: 2;
padding: 2em 0;
`;

export const footerLeft = css`
    position: absolute;
    width: 45%;
    height: 80%;
    text-align: left;
    line-height: 1.5;
    left: 0;
    float: left;
    z-index: 2;

    display: flex; 
    justify-content: space-between;
`;

export const fLeftLeft = css`
    width: 50%;
    display: block;
    padding: -3% 0;
    margin-left: 4%;
    color: black;
    font-size: 65%;
    text-decoration: none;
    flex: 1; 
`;

export const fLeftRight = css`
    width: 40%;
    margin-left: 4%;
    color: black;
    font-size: 65%;
    text-decoration: none;
    flex: 1; 
    color: #a25973;
`;

export const footerRight = css`
position:absolute;
width: 45%;
height: 80%;
text-align: left;
line-height: 1.5;
left: 50%;
float: left;
z-index: 2;

display: flex; 
justify-content: space-between;
`;

export const fRightLeft = css `
width: 50%;
display: block;
padding: -3% 0;
margin-left: 4%;
color: black;
font-size: 65%;
text-decoration: none;
flex: 1; /* flex 아이템으로 설정 */
`;

export const fRightRight = css`
width: 40%;
margin-left: 4%;
color: black;
font-size: 65%;
text-decoration: none;
flex: 1; 
color:white;
`


export const ImgBoxLeft = css``;
export const ImgBoxRight = css``;
