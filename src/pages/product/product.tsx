/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { 
    Header,
    Category } from "../../components/main";
import {
  LeftB,
  Container,
  RightB,
  p_top,
  innerRight,
  font,
  titleBox,
  optionBox,
  productShow,
  dropdownContainer,
  dropdownLabel,
  dropdownStyle,
  buttonStyle,
  buttonBox
}from "./styles";

 export const PSection= () =>{
    return(
        <div css = {p_top}>
        </div>
    );
};

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
];

const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
];

type DropdownProps = {
  label: string;
  options: { label: string; value: string }[];
};

type ButtonProps = {
  text: string;
  color: string;
};

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  return (
    <div css={dropdownContainer}>
      <label css={dropdownLabel}>{label}</label>
      <select css={dropdownStyle}>
        <option value="">{`--옵션을 선택하세요.--`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ text, color = '#4CAF50' }) => {
  return (
    <button css={buttonStyle}>
      {text}
    </button>
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
                <div css = {RightB}>
                  <img css = {productShow} src = "/imgs/product001.jpeg"/>
                  <img css = {productShow} src = "/imgs/product002.jpeg"/>
                  <img css = {productShow} src = "/imgs/product003.jpeg"/>
                  <img css = {productShow} src = "/imgs/product001.jpeg"/>
                  <img css = {productShow} src = "/imgs/product002.jpeg"/>
                  <img css = {productShow} src = "/imgs/product003.jpeg"/>
                  <img css = {productShow} src = "/imgs/product001.jpeg"/>
                  <img css = {productShow} src = "/imgs/product002.jpeg"/>
                  <img css = {productShow} src = "/imgs/product003.jpeg"/>
                </div>
                <div css = {LeftB}>
                  <div css = {innerRight}>
                    <div css = {titleBox}>
                      <div css = {font}>Neat-TShir[3color]</div>
                      <div css = {font}>43,200</div>
                    </div>
                    <div css = {optionBox}>
                      <Dropdown label="COLOR" options={colorOptions} />
                      <Dropdown label="SIZE" options={sizeOptions} />
                    </div>
                    <div css ={buttonBox}>
                      <Button text="Buy Now" color="#FF5733" />
                      <Button text="Add to Cart" color="black" />
                      <Button text="Wishlist"  color="#FFC300" />
                    </div>
                  </div>
                </div>
            </div>
            <Header toggleLoginPanel={toggleLoginPanel}/>
            <Category/>
        </div>
    );
}
export default Product;