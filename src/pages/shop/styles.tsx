/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
width: 85vw;
height: 100vh;
z-index: 20;
left: 13vw;
top: 10vh;
right: 2vw;
position: fixed;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`;
export const product = css`
position: relative;
width: 20vw;
height: 50vh;
background-image: url('/imgs/product001.jpeg');
background-size: cover;
z-index: 30;
`;