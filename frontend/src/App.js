import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Programare from './pages/Programare';
import Footer from './components/Footer';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/About' element={<About/>} />
		<Route path='/Contact' element={<Contact/>} />
    <Route path='/Programare' element={<Programare/>} />
	</Routes>

  <Footer />
	</Router>
);
}

export default App;
