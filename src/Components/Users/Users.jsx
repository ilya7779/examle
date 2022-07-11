import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"


class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      // props.setUsers([
      //   {
      //     id: 1, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
      //     followed: 'false', fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}
      //   },
      //   {
      //     id: 2, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
      //     followed: 'true', fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}
      //   },
      //   {
      //     id: 3, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
      //     followed: 'false', fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}
      //   },
      // ])
      // debugger
      this.props.setUsers(response.data.items)
    });
  }

  render() {
    return <div>
      {
        this.props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                this.props.unfollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                this.props.follow(u.id)
              }}>Follow</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
        </div>)
      }
    </div>
  }
}

export default Users;