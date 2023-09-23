import styles from './Profile.module.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Profile extends Component {
  render(){
      return <div className="profile">
        <div className="description">
          <img
            src={this.props.user.avatar}
            alt="User avatar"
            className="avatar"
          />
          <p className="name">{this.props.user.username}</p>
          <p className="tag">@{this.props.user.tag}</p>
          <p className="location">{this.props.user.location}</p>
        </div>
      
        <ul className="stats">
          <li key={"Followers"} >
            <span className="label">Followers</span>
            <span className="quantity">{this.props.user.stats.followers}</span>
          </li>
          <li key={"Views"} >
            <span className="label">Views</span>
            <span className="quantity">{this.props.user.stats.views}</span>
          </li>
          <li key={"Likes"} >
            <span className="label">Likes</span>
            <span className="quantity">{this.props.user.stats.likes}</span>
            </li>
        </ul>
        </div>
  }
};

Profile.propTypes={
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      username: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      stats: PropTypes.arrayOf( 
        PropTypes.shape({
          followers: PropTypes.string,
          views: PropTypes.string,
          likes: PropTypes.string
        })
      )
    })
  )
}