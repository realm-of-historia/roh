"use client"

import React, { FormEventHandler, useEffect } from 'react'
import styles from './Digest.module.scss'
import { useState } from 'react'
import Image from 'next/image';
import Loader from './Loader/Loader';
import Text from '../Text/Text';
import Divider from '../Divider/Divider';
import { InView, useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageMy from '../Image/ImageMy';
import { usePathname  } from "next/navigation";
// import { useRouter } from 'next/router';

export interface StandardComponentProps {
  data?: any,
  reff?: any
}

const Digest = ({ reff, data }: StandardComponentProps) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [ref, inView] = useInView()
  const [iconRef, iconRefView] = useInView()

  const handler= (href : any) => {
    window.open(href)
  }
  const [active, setActive] = useState(true);
  const router = usePathname()
  useEffect(() => {
    if(router.includes('/contacts')){
      setActive(false)
    } else{
      setActive(true)
    }
  },[router])
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
        .then((dataMy) => {
          setLoading(false);
          if (dataMy.error) {
            if (dataMy.error.toLowerCase().includes('is not a valid email')) {
              toast.error('Not a valid email provided.');
            }
            toast.error(dataMy.error);
          } else
            if (dataMy.message) {
              toast.success('Successfully subscribed!');
              setEmail('');
            } else {
              toast.error('Something went wrong. Try again later');
            }
        })
        .catch((e) => {
          setLoading(false);
          toast.error('Something went wrong. Try again later');
        });
    }, 1500);
  };

  return (
    <div className={`${styles.main} ${active ? null : styles.mainNoActive}`} ref={reff}>
      <div className={styles.mainDivider}></div>
      <div className={styles.subscription}>
        <div className={styles.header} ref={ref}>
          {
            data?.socialNetwork?.map((_:any, i:number) => (
              <button key={i + 666} onClick={() => handler(_.href)}><div className={`${inView ? styles.translation : ''}`}><ImageMy src={_.icon.data.attributes.url} alt='' width='24' height='24'/>{_.name}</div></button>
            ))
          }
        </div>
        <div className={styles.container}>
          <div className={styles.text}>
            <p className={`${inView ? styles.translation : ''}`}>
              {data?.titleDescription}
            </p>
            <p className={`${inView ? styles.translation : ''}`}>
              {data?.titleRegistration}
            </p>
            <div className={`${styles.input_wrapper} ${inView ? styles.translation : ''}`}>
              <input
                placeholder={data?.placeholder || 'Email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.input_divider}>
                <div></div>
                <div></div>
              </div>
            </div>
            <button className={`${styles.loaderContainer} ${inView ? styles.translation : ''}`}
              onClick={subscribeHandler}>{loading ? (
                <Loader />
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
        <Image className={styles.logo} alt='' src={'/ROHlogo.svg.svg'} width={630} height={180} />
        <p className={styles.footer}>
          {data?.rofDate}
        </p>
        <Divider horizontal={true} position={'top left'}></Divider>
        <Divider horizontal={true} position={'bottom left'}></Divider>
        <Divider position={'top left'}></Divider>
        <Divider position={'top right'}></Divider>
        <div className={styles.divider}></div>
        <div className={`${inView ? styles.mainCircle : ''}`}></div>
        <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
        <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
        <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
        <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='/Ellipse.svg' /></picture>
      </div>
    </div>
  )
}

export default Digest