import './App.css';
import background from "./background.jpg"
import Sidebar from "./zredo/Sidebar/Sidebar.js";
import Navbar from './zredo/Navbar/Navbar.js';

function App() {
    return (

        <div>
            <img id="background-image" src={background} alt=""/>
            <div id="main-body-container"></div>
            <Navbar />
            <Sidebar />
        </div>

    );
}

export default App;
