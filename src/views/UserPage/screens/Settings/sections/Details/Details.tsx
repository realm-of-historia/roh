import React, { useEffect } from 'react'
import styles from './Details.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import {useState} from 'react'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import SwitchBox from '@/components/UI/SwitchBox/SwitchBox'
import CheckBox from '@/components/UI/CheckBox/CheckBox'

const DetailsProfile = () => {

    const [Name, setName] = useState('')
    const [SecondName, setSecondName] = useState('')
    const [Phone, setPhone] = useState('')
    const [Site, setSite] = useState('')



    const detailsText = [
        ['Full Name *', 'Vasya', Name, setName, 'Pupkin', SecondName, setSecondName],
        ['Contact Phone *', '044 3276 454 935', Phone, setPhone],
        ['Company Site', 'vasya.pupkin@1507.io', Site, setSite],
        ['Country *', 'Select country'],
        ['Language *', 'Select language'],
        ['Time Zone *', 'Select timezone...'],
        ['Currency', 'Select a currency...'],
        ['Communication', '', '', '', '', '', '', 'Email', 'Phone'],
    ]

    useEffect(() =>{
        console.log(Name)
    })

  return (
    <div className={styles.details}>
        <div className={styles.avatar}>
            <p>Avatar</p>
            <img src='userImage.png' width={240} height={240} alt=''/>
        </div>
        {detailsText.map((element: any) => (
            <div key={element} className={styles.section}>
                <Text>
                    <p>
                        {element[0]}
                    </p>
                </Text>
                {!element[7] ? <div className={`${element[0] == 'Full Name *' ?  styles.inputs : styles.inputi}`}>
                    <SimpleInput placeholder={element[1]} value={element[2]} isContacts={false} onChange={(e) => element[3](e.target.value)}></SimpleInput>
                    {element[0] == 'Full Name *' ? 
                    <SimpleInput placeholder={element[4]} value={element[5]} isContacts={false} onChange={(e) => element[6](e.target.value)}></SimpleInput> :
                    <></>    
                }
                </div> : 
                <div className={styles.checks}>
                    <Text>
                        <CheckBox></CheckBox>
                        <p>{element[7]}</p>
                    </Text>
                    <Text>
                        <CheckBox></CheckBox>
                        <p>{element[8]}</p>
                    </Text>
                </div>}
            </div>
        ))}
        <div className={styles.switches}>
            <Text>
                <p>Allow Marketing</p>
            </Text>
            <SwitchBox></SwitchBox>
        </div>
        <div className={styles.footer}>
            <button>Discard</button>
            <UserButtonBlack text='Save Changes'></UserButtonBlack>
        </div>
    </div>
  )
}

export default DetailsProfile