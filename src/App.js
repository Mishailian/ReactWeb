import './App.css';
import Header from './components/Header/Headr.jsx';
import SideBar from './components/SideBar/SideBar';
import Dialog from './components/MainPages/Dialog/Dialog';


function App() {
  return (
    <div className='main'>
      <Header/>
      <SideBar/>
      <Dialog/>
    </div>
  );
}

export default App;
