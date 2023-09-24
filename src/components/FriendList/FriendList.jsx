import React, { Component } from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export class FriendList extends Component {
  render(){
    return <ul className={styles.frendsList}>
    {this.props.friends.map(friend => (
      <li className={styles.friend} key={friend.name}>
            {friend.isOnline && (<div className={styles.statusOn}></div>)}
            {!friend.isOnline  && (<div className={styles.statusOff}></div>)}
        <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p>{friend.name}</p>
      </li>
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
