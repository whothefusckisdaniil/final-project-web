import React, { Component } from 'react';

class ChatSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newMessage: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      messages: [...prevState.messages, { text: prevState.newMessage, sender: 'user' }],
      newMessage: '',
    }));
  };

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div>
        <h2>Customer Support Chat</h2>
        <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: '10px', color: message.sender === 'user' ? 'blue' : 'green' }}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={this.handleSubmit} style={{ marginTop: '10px' }}>
          <input
            type="text"
            value={newMessage}
            onChange={this.handleInputChange}
            placeholder="Enter your question..."
            style={{ width: '80%', padding: '5px' }}
          />
          <button type="submit" style={{ marginLeft: '10px', padding: '5px' }}>Send</button>
        </form>
      </div>
    );
  }
}

export default ChatSupport;
