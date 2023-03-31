import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Landing from "./components/LandingPage/Landing";
import LatestProperty from "./components/LandingPage/LatestProperty";
import Register from "./components/Auth/Register";
import Nav from "./components/GlobalComponents/Nav";
import Footer from "./components/GlobalComponents/Footer";
import { Login } from "./components/Auth/Login";
import Properties from "./components/Property/Properties";
import { ResetPassword } from "./components/Auth/ResetPassword";
import PropertyDetails from "./components/Property/PropertyDetails";
import Profile from "./components/Auth/Profile";

function App() {
    let url = window.location.href.split("/")
    const urlPath = (url && url[3]) || ""
    console.log("--------aaa---->")
    /*const notHeaderFooter = ["register", "login"]
    const isHeader = (notHeaderFooter.indexOf(urlPath) !== -1) ? null : <Nav />
    const isFooter = (notHeaderFooter.indexOf(urlPath) !== -1) ? null : <Footer />*/
    return (
        <BrowserRouter>
            <Nav urlPath={urlPath } />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Landing />} /> // page-not-found route
                <Route path="/latestProperty" element={<LatestProperty />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
  );
}

export default App;
