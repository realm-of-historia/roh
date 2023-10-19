"use client"

import React, { useState } from 'react';
import styles from './Contacts.module.scss';
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput';
import Text from '@/components/Text/Text';
import {useForm} from 'react-hook-form'
import GoogleMapReact from 'google-map-react';
import Map from './Map';

const AnyReactComponent = ({text, lat, lng}: {text: any, lat: any, lng: any}) => <div>{text}</div>;
export interface StandardComponentProps {
    title?: string,
    button?: string,
}
export default function Contacts({title, button} : StandardComponentProps) {
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
      
    //     const map: any = new google.maps.Map(document.getElementById('map'), mapOptions);
    //   }
      
    const handleApiLoaded = (map: any, maps: any) => {
        console.log('loaded')
    };

    return (
        <form className={styles.contacts} onSubmit={onSubmit}>
            <div className={styles.left}>
                <div className={styles.divider}></div>
                <div>
                    {
                        title && 
                        <p>{title}</p>
                    }
                </div>
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
                {
                    button && 
                    <button type='submit'>{button}</button>
                }
            </div>
            <img className={styles.right} src='mapImage.png' width={1408} height={591}/>
        </form>
    );
}