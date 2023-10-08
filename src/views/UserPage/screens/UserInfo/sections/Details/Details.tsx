import React from 'react'
import styles from './Details.module.scss'
import Icon from '@/components/UI/Icon/Icon'

const Details = () => {

    const detailsText = [
        ['Full Name', 'Vasya Pupkin'],
        ['Contact Phone', '044 3276 454 935', true],
        ['Email', 'vasya.pupkin@1507.io'],
        ['Country', 'Armenia'],
        ['Communication', 'Email, Phone'],
        ['Allow Changes', 'Yes']
    ]


  return (
    <div className={styles.details}>
        {detailsText.map((element: any) => (
            <div key={element} className={styles.section}>
                <div>
                    <p>
                        {element[0]}
                    </p>
                </div>
                <div>
                    <p className={styles.info}>
                        {element[1]}
                    </p>
                </div>
                {element[2] ? <div className={styles.verification}>
                    <div>
                        <Icon label='checked'></Icon>
                    </div>
                    <div>
                        <p>Verified</p>
                    </div>
                </div> : <></>}
            </div>
        ))}
        <button>Edit Profile</button>
    </div>
  )
}

export default Details