import { BrowserRouter } from 'react-router-dom';
import Routes from './config/Routes';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
