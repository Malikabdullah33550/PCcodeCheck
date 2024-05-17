import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='/Login' element={<Login />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
