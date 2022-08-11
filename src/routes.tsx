import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Formation from './pages/Formation';
import Home from './pages/Home'
import Projects from './pages/PersonalProjects';

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/formation' element={<Formation />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/personal-projects' element={<Projects />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}