import styles from './FriendListItem.module.css'

 const FriendListItem = ({friend}) =>{
    return(
        <li className={styles.friend} key={friend.name}>
        {friend.isOnline && (<div className={styles.statusOn}></div>)}
        {!friend.isOnline  && (<div className={styles.statusOff}></div>)}
    <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p>{friend.name}</p>
    </li>
    )
}

export default FriendListItem