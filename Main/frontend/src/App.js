import { HomePage } from './Pages/HomePage';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import {RoundRobin} from './Pages/RoundRobin';
import {ScanCscan} from "./Pages/ScanCscan";
import {Bankers} from "./Pages/Bankers";
import {MRU} from "./Pages/MRU";
import './App.css';
import { AboutUs } from './Pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/roundrobin" element={<RoundRobin/>}/>
        <Route path="/scan-cscan" element={<ScanCscan/>}/>
        <Route path="/bankersAlgorithm" element = {<Bankers/>}/>
        <Route path="/MRU" element ={<MRU/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
