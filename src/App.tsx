import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./components/main";
import Shop from "./pages/shop/shop";
import Product from "./pages/product/product";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  return(
  <>
  <QueryClientProvider client = {queryClient}>
    <RecoilRoot>
      <Routes location = {location} key={location.key}>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
    </RecoilRoot>
  </QueryClientProvider>
  </>
  );
}

export default App;
