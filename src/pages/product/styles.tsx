import { css } from "@emotion/react";

export const RightB = css`
flex: 1;
height:400vh;
width:50vw;
overflow-y: scroll;
z-index:1;
::-webkit-scrollbar {
    display: none;
  }

`;

export const productShow = css `
background-size: cover;
width: 100%;

`;

export const LeftB = css`
flex: 1;
margin-top:0%;
scroll: fixed;
`;

export const Container = css`
display: flex;
`;

export const p_top = css`
 margin-top: 10%;
 margin-left: 10%;
 margin-right: 10%;
 background-color: white;
 z-index: 200;
 width: 80%;
 height: 80%;
`;

export const innerRight = css`
    width: 80%;
    height: 100%;
    margin: 10%;
    background-color: white;
    z-index: 200;
    padding-top: 10%;
`;

export const titleBox = css`
    width: 100%;
    margin-bottom: 20%;
`;
export const optionBox = css`
    width: 100%;
    margin-bottom: 10%;
`;
export const font = css`
    width: 100%;
    float:left;
    font-size: 80%;
    z-index: 300;
    margin-bottom: 1%;
    display: block;
`;

export const dropdownStyle = css`
    padding: 2% 2%;
    border: 1% solid #ccc;
    border-radius: 4px;
    font-size: 70%;
    margin-bottom: 3%;
    width: 100%;
`;
export const dropdownLabel = css`
    font-size: 80%;
    margin-bottom: 1%;
`;

export const dropdownContainer = css`
    display: flex;
    flex-direction: column;
    align-items: start;
`;
export const buttonStyle = css`
  width: 100%;
  padding: 2% 5%;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

export const buttonBox = css`
width: 100%;
margin-bottom: 10%;
`;

