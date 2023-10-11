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

    // const handleSendClick = () => {
    //     console.log('Name:', name);
    //     console.log('Email:', email);
    //     console.log('Subject:', subject);
    //     console.log('Message:', message);
    // };

    // var map = new google.maps.Map(document.getElementById('map'), {
    //     center: { lat: 51.5074, lng: -0.1278 },
    //     zoom: 10,
    //     styles: [
    //       {
    //         featureType: 'water',
    //         elementType: 'geometry',
    //         stylers: [
    //           { color: '#c9c9c9' }
    //         ]
    //       },
    //       {
    //         featureType: 'landscape',
    //         elementType: 'geometry',
    //         stylers: [
    //           { color: '#f2f2f2' }
    //         ]
    //       },
    //       {
    //         featureType: 'road',
    //         elementType: 'geometry',
    //         stylers: [
    //           { color: '#ffffff' }
    //         ]
    //       }
    //     ]
    //   });
    
    

    // function myMap() {
    //     const mapOptions = {
    //         center: new google.maps.LatLng(51.5, -0.12);
    //         zoom: 6
    //     }

    //     const map = new google.maps.Map(d)
    // }

      
      
      
      

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
                <iframe className={styles.right} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058650.3443753915!2d69.1887956681368!3d41.52673719246008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3897381dfce927f3%3A0x281058b74e88c433!2z0JrRi9GA0LPRi9C30YHRgtCw0L0!5e0!3m2!1sru!2sby!4v1696201050412!5m2!1sru!2sby" width="1408" height="591" loading='lazy' allowFullScreen style={{border: 0}}></iframe>
            </p>
        </form>
    );
}