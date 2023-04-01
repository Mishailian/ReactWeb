import './App.css';
import Header from './components/Header/Headr.jsx';
import SideBar from './components/SideBar/SideBar';
import Dialog from './components/MainPages/Dialog/Dialog';
import News from './components/MainPages/News/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";


let App = (props) => {

  return (
    <BrowserRouter>
      <div className='main'>
        <Header />
        <SideBar />
        <Routes>
          <Route path='/' element={<Dialog />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
