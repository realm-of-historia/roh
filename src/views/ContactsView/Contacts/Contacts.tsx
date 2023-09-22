"use client"

import React, { useState } from 'react';
import styles from './Contacts.module.scss';
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput';

export default function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSendClick = () => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);
    };

    return (
        <div className={styles.contacts}>
            <div className={styles.left}>
                <div className={styles.divider}></div>
                <p>SeND US eMAIL</p>
                <SimpleInput
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isContacts={false}
                />
                <SimpleInput
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isContacts={false}
                />
                <SimpleInput
                    placeholder='Subject'
                    isContacts={false}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <SimpleInput
                    placeholder='Message'
                    isContacts={false}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendClick}>Send</button>
            </div>
            <img src='map.png' className={styles.right} alt='' width={1408} height={591} />
        </div>
    );
}