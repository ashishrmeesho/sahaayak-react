import logo from './logo.svg';
import './App.css';
// import ChatbotComponent from './Chatbot';
import FaqBot from './FaqBot';
import bootstrap from 'bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FaqBot></FaqBot>
    </div>
  );
}

export default App;
