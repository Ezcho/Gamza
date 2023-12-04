/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { 
    Header,
    Category } from "../components/main";
 import { css } from "@emotion/react";

 export const LeftB = css`
   flex: 1;
   height:200vh;
   width:50vw;
   overflow-y: scroll;
   background-image: url ('/imgs/product001.jpeg');
   z-index:100;
 `;
 
 export const RightB = css`
   flex: 1;
   margin-top:0%;
   height: 100vh;
   scroll: fixed;
   background-color: lightcoral;
 `;
 
 export const Container = css`
   display: flex;
 `;
 
 const p_top = css`
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
    background-color: white;
    z-index: 200;
    width: 80%;
    height: 80%;
 `;

 export const PSection= () =>{
    return(
        <div css = {p_top}>
            
        </div>
    );
};

const Product = () => {
  const [isLoginPanelOpen, setLoginPanelOpen] = useState(false);

  const toggleLoginPanel = () => {
      setLoginPanelOpen(!isLoginPanelOpen);
  };
    return(
        <div>
            <div css = {Container}>
                <div css = {RightB}></div>
                <div css = {LeftB}></div>
            </div>
            <Header toggleLoginPanel={toggleLoginPanel}/>
            <Category/>
        </div>
    );
}
export default Product;