import './App.css';
import background from "./background.jpg"
import Sidebar from "./Components/sidebar.js";
import Navbar from './Components/navbar.js';

function App() {
    return (

        <div>
            <img id="background-image" src={background} alt=""/>
            <div id="table-view">
            </div>
            <Navbar />
            <Sidebar />
        </div>

    );
}

export default App;
