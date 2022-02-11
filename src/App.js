import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Main from './views/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
