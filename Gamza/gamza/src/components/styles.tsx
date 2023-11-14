import { css } from "@emotion/react";

export const headerBox = css`
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 90;
padding: 20px 0;

background-color:grey;
text-align:center;
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

background-color:red`;

export const categoryBox = css`
width: 10vw;
height: 50vh;
position: fixed;
top: 40;
font-size: 100%;
padding: 20px 0;
text-align:center;
font-color:white;
z-index: 80;

background-color: blue;`;

export const logoBox = css`
float: left;`;

export const infoBox = css``;

export const footerLeft = css`
position:absolute;
width: 45%;
height: 80%;
text-align: left;
line-height: 1.5;
left: 0;
float: left;
z-index: 2;
background-color: lime;`;

export const footerRight = css`
position:absolute;
width: 45%;
height: 80%;
text-align: left;
line-height: 1.5;
left: 50%;
float: left;
z-index: 2;

background-color: lime;`;

export const ImgBoxLeft = css``;
export const ImgBoxRight = css``;
