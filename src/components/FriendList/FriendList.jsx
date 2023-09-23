import React, { Component } from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export class FriendList extends Component {
  render(){
    return <ul className="frends-list">
    {this.props.friends.map(friend => (
      <li className='friend'>
            {friend.isOnline && (<div className="status-on"></div>)}
            {!friend.isOnline  && (<div className="status-off"></div>)}
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
      </li>
    ))}
    </ul>
    }
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired
   })
  )
};
/*{
      "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
      "name": "Mango",
      "isOnline": true,
      "id": 1812
    }*/
