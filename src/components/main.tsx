/** @jsxImportSource @emotion/react */

import {useNavigate} from "react-router-dom";
import {css} from '@emotion/react';
import React, { useState, useEffect } from 'react';
import {
    footerBox, 
    headerBox, 
    categoryBox, 
    logoBox,
    footerLeft,
    footerRight,
}from "./styles";

  const Main = () => {
    return(
        <div>  
            <div css = {headerBox}>header
                <div css = {logoBox}>
                    Logo
                </div>
            </div>
            <div css = {footerBox}>
                <div css = {footerLeft}></div>
                <div css = {footerRight}></div>
            </div>
            <div css = {categoryBox}>Category</div>
        </div>
    );
  };
export default Main;