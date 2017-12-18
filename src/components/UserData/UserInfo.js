import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import '../../App.css';

class UserInfo extends Component {

  render() {
    const { onChange } = this.props;
    return (
      <div>
        <FormControl
          type="text"
          placeholder="Add Your Player"
          onChange={onChange}
        />
      </div>
    )
  }
}

export default UserInfo;