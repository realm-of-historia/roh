import React from 'react'
import styles from './Details.module.scss'
import Text from '@/components/Text/Text'
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
            <div className={styles.section}>
                <Text>
                    <p>
                        {element[0]}
                    </p>
                </Text>
                <Text>
                    <p className={styles.info}>
                        {element[1]}
                    </p>
                </Text>
                {element[2] ? <div className={styles.verification}>
                    <Text>
                        <Icon label='checked'></Icon>
                    </Text>
                    <Text>
                        <p>Verified</p>
                    </Text>
                </div> : <></>}
            </div>
        ))}
        <button>Edit Profile</button>
    </div>
  )
}

export default Details