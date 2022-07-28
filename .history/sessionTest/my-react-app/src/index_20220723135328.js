// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { useState } from "react";
const Image = ({ src, opacity }) => {
  const [isHovered, setIsHovered] = useState();
  return (
    <div
      style={{ opacity: isHovered ? opacity : 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {" "}
      <img src={src} alt="img" />{" "}
    </div>
  );
};
export default function Image() {
  return <Image src="image" opacity={0.5} />;
}
