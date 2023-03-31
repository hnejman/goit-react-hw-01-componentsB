import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
  console.log(css);
    return(
    <ul class="frends-list-list">
    {friends.map(friend => (
      <li class="friend">
            {friend.isOnline && (<div class="status-on"></div>)}
            {!friend.isOnline  && (<div class="status-off"></div>)}
        <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p class="name">{friend.name}</p>
      </li>
    ))}
    </ul>)
}

