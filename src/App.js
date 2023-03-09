import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Landing from "./components/LandingPage/Landing";
import LatestProperty from "./components/LandingPage/LatestProperty";
import Register from "./components/Auth/Register";

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Landing />} />
                <Route path="/latestProperty" element={<LatestProperty />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
