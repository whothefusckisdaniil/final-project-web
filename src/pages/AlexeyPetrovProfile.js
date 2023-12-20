import React, { Component } from 'react';
import '../styles/AlexeyPetrovProfile.css';

class AlexeyPetrovProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editedData: {
        city: 'Alexey\'s City',
        country: 'Alexey\'s Country',
        username: 'Alexey_Petrov',
      },
    };
  }

  handleSendMessageClick = () => {
    window.location.href = '/messenger';
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleSaveClick = () => {
    this.setState({ editing: false });
  };

  handleCancelClick = () => {
    this.setState({
      editing: false,
      editedData: {
        city: 'Alexey\'s City',
        country: 'Alexey\'s Country',
        username: 'Alexey_Petrov',
      },
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editedData: { ...prevState.editedData, [name]: value },
    }));
  };

  render() {
    const { editing, editedData } = this.state;

    return (
      <div className="profile-container">
        <img className="banner" src="data:image/jpeg;base64,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" alt="Banner" />
        <img className="profile-image" src="https://this-person-does-not-exist.com/img/avatar-gen3c36d065c50a4744712e72cce0ce1779.jpg" alt="Profile" />

        <div className="user-info">
          <h2>Alexey Petrov</h2>
          <p>@Alexey_Petrov</p>

          {editing ? (
            <div>
              <label>
                City:
                <input type="text" name="city" value={editedData.city} onChange={this.handleInputChange} />
              </label>
              <label>
                Country:
                <input type="text" name="country" value={editedData.country} onChange={this.handleInputChange} />
              </label>
              <label>
                Username:
                <input type="text" name="username" value={editedData.username} onChange={this.handleInputChange} />
              </label>
            </div>
          ) : (
            <div>
              <p>{`City: ${editedData.city}`}</p>
              <p>{`Country: ${editedData.country}`}</p>
              <p>{`Username: ${editedData.username}`}</p>
            </div>
          )}
        </div>

        <div className="action-buttons">
          {editing ? (
            <>
              <button onClick={this.handleSaveClick}>Save</button>
              <button onClick={this.handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button onClick={this.handleSendMessageClick}>Send Message</button>
          )}
        </div>

        <div className="tweets">
          <p>Latest tweet from Alexey Petrov...</p>
        </div>
      </div>
    );
  }
}

export default AlexeyPetrovProfile;
