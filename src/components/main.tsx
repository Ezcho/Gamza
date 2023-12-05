/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import {
    footerBox, 
    headerBox, 
    categoryBox, 
    logoBox,
    footerLeft,
    footerRight,
    body,
    infoButton,
    infoBox,
    categoryButton,
    fLeftLeft,
    fLeftRight,
    fRightLeft,
    fRightRight,
    categoryButton2,
    loginPanelStyle,
    closeButtonStyle,
    inputStyle,
    loginButtonStyle,
    formStyle,
    formContainerStyle
}from "./styles";

type HeaderProps = {
    toggleLoginPanel: () => void;
};

export const Header = ({ toggleLoginPanel }: HeaderProps) => {
    return(
        <div css={headerBox}>
            <div css={infoBox}>
                <button css={infoButton} onClick={toggleLoginPanel}>Login</button>
                <button css={infoButton}>Account</button>
                <button css={infoButton}>Cart</button>
                <button css={infoButton}>Search</button>
            </div>
        </div>
    );
};

    export const Footer = () =>{
        return(
            <div css = {footerBox}>
                <div css = {footerLeft}>
                    <div css = {fLeftLeft}>CUSTOM CENTER - 02-1234-567
                    <br/>CS 10AM - 5PM
                    <br/>LUCNCH 12:30PM-1:30PM
                    <br/> HOLYDAY,SAT,SUM OFF
                    <br/>PRODUCT RETURN- 서울시 노원구 공릉동 593-5,01848</div>

                    <div css = {fLeftRight}>동해물과 백두산이 마르고닳도록
                     <br/>하느님이 보우하사 우리나라만세
                     <br/>무궁화 삼천리 화려강산
                     <br/>대한사람 대한으로 길이보전하세
                    <br/>전화문의: ABC.DEF</div>
                </div>
                <div css = {footerRight}>
                <div css = {fRightLeft}>감자에 싹이나서 잎이나서 위잉위잉쇽
                    <br/>하나빼기 일
                    <br/>하나 빼ㄱ ㅣ일
                    <br/> 둘빼기 삼은 마이너스일
                    <br/>PRODUCT RETURN- 서울시 노원구 공릉동 593-5,01848</div>

                    <div css = {fRightRight}>감자 감자 감자: 감자
                     <br/>감자가 하나에 천원?
                     <br/>좋아, 당장 사러가자 ~~ ,
                     <br/>돼지고기김치찌개 소시지야채볶음 매콤새우크림파스타
                    <br/>점심뭐먹지</div>
                </div>
            </div>
        );
    };

    export const Category = () => {
        return(
            <div css = {categoryBox}>
                <Link to = "/"><div css = {logoBox}></div></Link>
                <a href="/shop" css = {categoryButton}>SHOP</a>
                <a href="#" css = {categoryButton}>COLLECTION</a>
                <a href="#" css = {categoryButton2}>Top</a>
                <a href="#" css = {categoryButton2}>Bottom</a>
                <a href="#" css = {categoryButton2}>Shirts</a>
                <a href="#" css = {categoryButton2}>Outer</a>
                <a href="#" css = {categoryButton}>ABOUT</a>
                <a href="#" css = {categoryButton}>CONTACT</a>
                <a href="#" css = {categoryButton}>BOARD</a>
            </div>
        );
    };
// LoginPanel 컴포넌트
const LoginPanel = ({ isOpen, closePanel }: { isOpen: boolean; closePanel: () => void }) => {
    return (
        <div css={loginPanelStyle(isOpen)}>
            <div css={formContainerStyle}>
                <form css={formStyle}>
                    <input css={inputStyle} type="text" id="username" placeholder="ID" />
                    <input css={inputStyle} type="password" id="password" placeholder="Password" />
                    <button css={loginButtonStyle} type="submit">로그인</button>
                </form>
            </div>
        <button css={closeButtonStyle} onClick={closePanel}>X</button>
    </div>
    );
};

// Main 컴포넌트
const Main = () => {
    const [isLoginPanelOpen, setLoginPanelOpen] = useState(false);

    const toggleLoginPanel = () => {
        setLoginPanelOpen(!isLoginPanelOpen);
    };

    const closeLoginPanel = () => {
        setLoginPanelOpen(false);
    };

    return (
        <div css={body}>
            <Header toggleLoginPanel={toggleLoginPanel}/>
            {isLoginPanelOpen && <LoginPanel isOpen={isLoginPanelOpen} closePanel={closeLoginPanel} />}
            <Footer/>
            <Category/>
        </div>
    );
};
export default Main;