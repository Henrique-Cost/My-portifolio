import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Formation from './pages/Formation';
import Home from './pages/Home'

export default function Router() {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path='/formation' element = {<Formation/>}/>
                <Route path='/contact' element = {<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}