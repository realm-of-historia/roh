import React from 'react'
import styles from './Lobby.module.scss'


const Lobby = () => {


  return (
    <div className={styles.lobby}>
        <div className={styles.lobby_image}>
            <img src='lobbyImage.png' alt='' width={1920} height={800}/>
        </div>
        <p className={styles.title}>3D LOBBY</p>
        <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.circleBig}></div>
                <div className={styles.circleLittle}></div>
                <div className={styles.firstLine}></div>
                <div className={styles.secondLine}></div>
            </div>
            <p>
                <span>Click to go</span>
                <span>to the 3d lobby</span>
            </p>
        </div>
    </div>
  )
}

export default Lobby