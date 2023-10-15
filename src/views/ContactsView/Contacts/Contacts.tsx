"use client"

import React, { useState } from 'react';
import styles from './Contacts.module.scss';
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput';
import Text from '@/components/Text/Text';
import {useForm} from 'react-hook-form'


export default function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const {register, handleSubmit} = useForm()

    const onSubmit = (data: any) => console.log(data)


      
      
    // function initializeMap() {
    //     const mapOptions = {
    //       center: { lat: 51.5074, lng: -0.1278 },
    //       zoom: 10,
    //       mapTypeId: '50e6da863b3a2bcd',
    //     };
      
    //     const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //   }
      
      

    return (
        <form className={styles.contacts} onSubmit={onSubmit}>
            <div className={styles.left}>
                <div className={styles.divider}></div>
                <div><p>SeND US eMAIL</p></div>
                <SimpleInput
                    register={register}
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isContacts={false}
                    name='name'
                />
                <SimpleInput
                    placeholder='Email'
                    register={register}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isContacts={false}
                    name='email'
                />
                <SimpleInput
                    register={register}
                    placeholder='Subject'
                    isContacts={false}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    name='subject'
                />
                <SimpleInput
                    placeholder='Message'
                    isContacts={false}
                    register={register}
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit'>Send</button>
            </div>
            <p className={styles.rightContainer}>
                {/* <iframe className={styles.right} id='map' src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD29cTxkGM8BgG7Yb-4zvpJrcOpKcttvTc&callback=initializeMap" width="1408" height="591" loading='lazy' allowFullScreen style={{border: 0}}></iframe> */}
                <script id='map' src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD29cTxkGM8BgG7Yb-4zvpJrcOpKcttvTc&callback=initializeMap"></script>
            </p>
        </form>
    );
}