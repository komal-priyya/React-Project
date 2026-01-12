// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import SidebarProvider from './contexts/SidebarContext.jsx'





// createRoot(document.getElementById('root')).render(
//   <SidebarProvider>
//  <App />
//   </SidebarProvider>
   
  
// )
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// import ProductProvider from "./contexts/ProductContext";
// import SidebarProvider from "./contexts/SidebarContext";
// import CartProvider from "./contexts/CartContext";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

//   // <SidebarProvider>
//     {/* <CartProvider> */}
//       // {/* <ProductProvider> */}
//         // <React.StrictMode>
//         <BrowserRouter>
//           <App />
        
// </BrowserRouter>
//         // </React.StrictMode>
//       // </ProductProvider>
//     // </CartProvider>
//   // </SidebarProvider>
  

// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
