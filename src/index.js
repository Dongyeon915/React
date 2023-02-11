import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DongClassComponent from "./ClassComponent/DongClassComponent";
import FuntionComponnent from "./funtionComponent/FuntionComponnent";
import ClassComponentTwo from "./ClassComponent/ClassComponentTwo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <DongClassComponent name={"클래스 컴포넌트"}/>,
      <ClassComponentTwo btnName={"인풋전송"}/>
      {/*<FuntionComponnent funtionName={"함수형"}/>*/}
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
