/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
    Header,
    Category,
 } from "../components/main";
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

export const Product = () =>{
    return(
        <Link to="/product" css={css`text-decoration: none; color: inherit;`}>
            <div css={css`margin-bottom: 2%;` }>
                <div css = {product}></div>
                <div>제품명</div>
                <div>제품설명</div>
            </div>
        </Link>
    );
}

export  const Container = () => {
    return(
        <div css = {container}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}
const Shop = () => {
    const [isLoginPanelOpen, setLoginPanelOpen] = useState(false);

    // 로그인 패널 토글 함수
    const toggleLoginPanel = () => {
        setLoginPanelOpen(!isLoginPanelOpen);
    };
    return(
        <div>
            <Header toggleLoginPanel={toggleLoginPanel}/>
            <Category/>
            <Container/>
        </div>
    );
  };
export default Shop;