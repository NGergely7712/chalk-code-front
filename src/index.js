import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Teacher from "./UserTypes/Teacher";
import Student from "./UserTypes/Student";
import Parent from "./UserTypes/Parent";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route, 
  Routes
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>{/*
        <Route path="/teacher" element={<Teacher />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/parent" element={<Parent />}></Route>*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
