
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './compnant/home1/Home';
import Servies from './compnant/Servies/Servies';
import Portfolio from './compnant/Portfolio/Portfolio';
import About from './compnant/About/About';
import Contant from './compnant/Contant/Contant';
import Header from './compnant/Header/Header';
import Footer from './compnant/Footer/Footer';
// import Header from'./compnant/Header/Header';

function App() {
  return (
    <>
    <div className="container">
    {/* <Header/> */}
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/servies" element = {<Servies/>} />
        <Route path="/portfolio" element = {<Portfolio/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contant" element = {<Contant/>} />

        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>

    </>
  );
}

export default App;
