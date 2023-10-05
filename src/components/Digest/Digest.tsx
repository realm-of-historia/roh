"use client"

import React, { FormEventHandler } from 'react'
import styles from './Digest.module.scss'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Image from 'next/image';
import Loader from './Loader/Loader';
import Text from '../Text/Text';
import Divider from '../Divider/Divider';
import { InView, useInView } from 'react-intersection-observer';


const Digest = ({reff}: {reff?: any}) => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { ref, inView } = useInView()

  const disHandler = () => {
    window.open('https://discord.gg/48B3V4Av')
  }

  const tikHandler = () => {
    window.open('https://www.tiktok.com/@realm.of.historia')
  }

  const twitHandler = () => {
    window.open('https://twitter.com/RealmofHistoria')
  }

  const instHandler = () => {
    window.open('https://www.instagram.com/realmofhistoria/')
  }


  const validateEmail = (email: any) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const subscribeHandler = (e: any) => {
    e.preventDefault()

    if (loading) { return }


    if (!validateEmail(email)) {
      toast.error('Please enter a valid email');
      return;
    }


    setLoading(true);

    const body = JSON.stringify({ email })
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    }

    setTimeout(() => {
      fetch('https://api.realmofhistoria.com/subscribe', options)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.error) {
            if (data.error.toLowerCase().includes('is not a valid email')) {
              toast.error('Not a valid email provided.');
            }
            toast.error(data.error);
          } else
            if (data.message) {
              toast.success('Successfully subscribed!');
              setEmail('');
            } else {
              toast.error('Something went wrong. Try again later');
            }
        })
        .catch((e) => {
          console.log(e)
          setLoading(false);
          toast.error('Something went wrong. Try again later');
        });
    }, 1500);
  };

  return (
    <div className={styles.main} ref={reff}>
      <div className={styles.mainDivider}></div>
        <div className={styles.subscription}>
            <div className={styles.header}>
              <button onClick={disHandler}><Text yMove={15}><img src='/discordImage.svg' alt='' width='24' height='24'/>Discord</Text></button>
              <button onClick={tikHandler}><Text yMove={15}><img src='/tiktok.svg' alt='' width='24' height='24'/>TikTok</Text></button>
              <button onClick={twitHandler}><Text yMove={15}><img src='/twitterImage.svg' alt='' width='24' height='24'/>Twitter</Text></button>
              <button onClick={instHandler}><Text yMove={15}><img src='/instagramImage.svg' alt='' width='24' height='24'/>Instagram</Text></button>
            </div>
            <div className={styles.container}>
                <div className={styles.text}>
                    <Text>
                      <p>
                          JOIN OUR WeeKLY DIGeST
                      </p>
                    </Text>
                    <Text>
                      <p>
                          Get exclusive promotions & updates straight to your inbox.
                      </p>
                    </Text>
                    <div className={styles.input_wrapper}>
                        <input 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className={styles.input_divider}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <button
                    onClick={subscribeHandler}>{loading ? (
                        <Loader/>
                        ) : (
                            'Subscribe'
                        )}
                    </button>
                    <div className={styles.left}></div>
                    <div className={styles.right}></div>
                </div>
            </div>
            <div className={styles.leftDivider}></div>
      </div>
      <div className={styles.promotion}>
        <Image className={styles.logo} alt='' src={'/ROHlogo.svg.svg'} width={630} height={180}/>
        <p className={styles.footer}>
          Ⓒ ROH 2023
        </p>
        <Divider horizontal={true} position={'top left'}></Divider>
        <Divider horizontal={true} position={'bottom left'}></Divider>
        <Divider position={'top left'}></Divider>
        <Divider position={'top right'}></Divider>
        <div className={styles.divider}></div>
        <div ref={ref} className={`${ inView ? styles.mainCircle : ''}`}></div>
        <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
        <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
        <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
        <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
      </div>
    </div>
  )
}

export default Digest