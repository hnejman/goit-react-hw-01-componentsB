import styles from './Profile.module.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Profile extends Component {
  render(){
      return <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={this.props.user.avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p className={styles.name}>{this.props.user.username}</p>
          <p className={styles.tag}>@{this.props.user.tag}</p>
          <p className={styles.location}>{this.props.user.location}</p>
        </div>
      
        <ul className={styles.stats}>
          <li key={"Followers"} >
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{this.props.user.stats.followers}</span>
          </li>
          <li key={"Views"} >
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{this.props.user.stats.views}</span>
          </li>
          <li key={"Likes"} >
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{this.props.user.stats.likes}</span>
            </li>
        </ul>
        </div>
  }
};

Profile.propTypes={
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    })
  })
}