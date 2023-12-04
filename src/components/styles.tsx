import { css } from "@emotion/react";

export const body = css`
width:100vw;
height: 100vh;
background-size: cover;
background-image: url('/imgs/main.png');
`

export const headerBox = css`
  width: 50vw;
  height: 5vh;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const logoBox = css`
width: 7vw;
height: 7vh;
background-image: url('/imgs/logogo.svg'); 
background-size: contain; 
background-repeat: no-repeat; 
background-position: center; 
z-index: 300;
margin-left: 20%;
margin-top: 0%;
`;

export const infoBox = css`
margin-top: 3%;
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
top: 0%;
font-size: 80%;
padding: 0;
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
export const categoryButton2 = css`
display: block;
padding: -3% 0;
margin-bottom: 5%;
margin-left: 30%;
color: black;
font-size: 85%;
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

export const loginPanelStyle = (isOpen: boolean) => css`
width: 40vw;
height: 100vh;
position: fixed;
top: 0;
right: 0;
background-color: white;
z-index: 400;
transition: transform 0.3s ease-in-out;
transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
display: flex;
align-items: center;
justify-content: center;
`;

export const closeButtonStyle = css`
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.5em; 
    position: absolute; 
    top: 1%;
    left: 1%;
    color: #333;
`;

export const formStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const inputStyle = css`
    width: 36vw;
    margin: 10px 0;
    padding: 8px;
    border: 1px solid brown;
    border-radius: 4px;
`;

export const loginButtonStyle = css`
width: 45%; // 텍스트 필드 너비의 50%
padding: 8px 15px;
background-color: lightgray;
border: none;
border-radius: 4px;
cursor: pointer;
margin-top: 10px;
margin-left: auto; // 오른쪽으로 정렬
align-self: flex-end; // 부모 요소의 끝에 정렬
`;

export const formContainerStyle = css `
display: flex;
flex-direction: column;
align-items: center;
`;