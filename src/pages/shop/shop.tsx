/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
    Header,
    Category,
 } from "../../components/main";
 import { css } from "@emotion/react";
 import{
    product,
    container,
 } from "./styles"

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