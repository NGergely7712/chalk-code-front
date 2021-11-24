import './App.css';
import navbar from './Components/navbar.js';
import sidebar from "./Components/sidebar.js";
import contentBody from "./Components/contentBody.js";
import script from "./Components/scripts.js"

function App() {
    return (

        <div>
            {navbar()}
            <h2>Hello world</h2>
            {sidebar()}
            {contentBody()}
            {script()}
        </div>

    );
}

export default App;
