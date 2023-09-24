import React, { Component } from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem.jsx'

export class FriendList extends Component {
  render(){
    return <ul className={styles.frendsList}>
    {this.props.friends.map(friend => (
      <FriendListItem friend={friend}/>
    ))}
    </ul>
    }
}

FriendList.propTypes = {
  friends:PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};
