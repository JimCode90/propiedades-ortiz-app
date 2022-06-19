import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./components/home/Home";
import Propiedades from "./components/propiedades/Propiedades";
import Agentes from "./components/agentes/Agentes";
import SearchOverlay from "./common/SearchOverlay";
import PropiedadesList from "./components/propiedades/PropiedadesList";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <SearchOverlay />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/propiedades" element={<Propiedades/>}/>
                <Route path="/propiedades-lista" element={<PropiedadesList/>}/>
                <Route path="/agentes" element={<Agentes/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
