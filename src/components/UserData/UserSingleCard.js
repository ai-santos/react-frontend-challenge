import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

class UserCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.photoUrl.photo} alt="none"/>
        <div>Stephen Curry</div>
      </div>
    );
  }
}

UserCard.propTypes = {
  photoUrl: PropTypes.object,
};

export default UserCard;