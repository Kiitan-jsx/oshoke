import './App.css';
import WorkPage from './components/WorkPage';
import CareerPage from './components/CareerPage';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';




function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/career" element={<CareerPage />} />
     
    </Routes>
  );
}

export default App;
