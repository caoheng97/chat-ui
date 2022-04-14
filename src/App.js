import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import './App.css';


function App() {
  return (
    <div className='App'>
      <div className='App__page'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
