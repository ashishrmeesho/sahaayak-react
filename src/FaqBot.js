import React, { useState } from 'react';
import List from './List'
import axios from 'axios'

function FaqBot() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (inputValue) {
      setMessages(messages => [...messages, { user: 'supplier', text: inputValue }]); 
      getBotResponse(inputValue)
        .then(response => {
          if (response.data)
            setMessages(messages => [...messages, { user: 'Meesho AI', text: response.data.response.text }]);
        });
    }
    setInputValue('');
    event.preventDefault();
  };

  const getBotResponse = async (message) => {
    var response = await axios.post('http://localhost:8000/api/conversation', { message });
    return response;
  }

  return (
    <>
      <header className="App-header">
        <h2>How can I help you?</h2>
      </header>
      <div className="container"></div>

      <form className="form-inline" onSubmit={handleSubmit}>

        <div className="input-group mb-3">
          <input type="text" value={inputValue} onChange={handleChange} className="form-control" placeholder="Enter your query" aria-label="Enter your query" aria-describedby="basic-addon2"></input>
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </div>
      </form>

      <div className="container">
        <List items={messages} />
      </div>
    </>
  );
}

export default FaqBot;
