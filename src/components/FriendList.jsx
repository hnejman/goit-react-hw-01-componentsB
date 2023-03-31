import './FriendList.css';

export const FriendList = ({ friends }) => {
    return(
    <ul className="frends-list">
    {friends.map(friend => (
      <li className='friend'>
            {friend.isOnline && (<div className="status-on"></div>)}
            {!friend.isOnline  && (<div className="status-off"></div>)}
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
      </li>
    ))}
    </ul>)
}

