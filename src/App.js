import './App.css';
import navbar from './Components/navbar.js';
import Sidebar from "./Components/sidebar.js";
//import contentBody from "./Components/contentBody.js";
import React from "react";

function App() {
    return (

        <div>
            {navbar()}
            <Sidebar />
            <div id="content-body">

            </div>
        </div>

    );
}

export default App;
