import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import UserCard from './UserSingleCard.js';
import UserInfo from './UserInfo.js';
import '../../App.css';

class UserCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.isEmptyObject = this.isEmptyObject.bind(this);
  }

  // isEmptyObject(obj) {
  //   for(let key in obj) {
  //     if(obj.hasOwnProperty(key)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  handleChange(event) {
    //check if the email exists in the players array
    //add a new property called email and add the new value inputted by the user
    this.setState({ email: event.target.value })
  };

  handleSubmit(event) {
    //check if the email exists in the players array
    //add a new property called email and add the new value inputted by the user

    const playerInfo = this.findPlayer(this.state.email);
    this.setState({ email: event.target.value, playerInfo });
    console.log(playerInfo);
    this.addPlayerCard(playerInfo);
  };

  findPlayer(email) {
    const { players } = this.state;
    return players.find(player => email.toLowerCase().includes(player.lastName.toLowerCase()));
  };

  addPlayerCard() {
    const { playerInfo } = this.state;
    //console.log('player from addPlayerCard', player);
    //add player photo to image div
    if(!playerInfo) {
      return null;
    }
    return playerInfo;
    //add player first and last name to name div
  }

  componentDidMount() {
    fetch('https://demo5689530.mockable.io/public/players')
      .then(response => {
        return response.json();
      }).then((data) => {
        let players = Object.values(data);
        console.log(players);
        this.setState({players: players});
      })
      .catch(function(error) {
        if(error) {
          throw new Error();
        }
      });
  }

  render() {
    let { playerInfo } = this.state;
    // playerInfo = playerInfo ? playerInfo : ""
    return (
      <div>
        <h1>Hello User Cards</h1>
        {playerInfo ?
          <UserCard
            photoUrl={ playerInfo }
          />
          :
          <div>Player Does Not Exist</div>
        }
        {/*{ this.state.playerInfo ? this.addPlayerCard() : null }*/}
        {/*{this.state.players.map(this.addPlayerCard)}*/}
        <form>
          <UserInfo
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}

UserCards.propTypes = {
  onChange: PropTypes.func,
};

export default UserCards;