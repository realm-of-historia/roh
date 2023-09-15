import React, { FormEventHandler } from 'react'
import styles from './Digest.module.scss'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Image from 'next/image';
import rohLogo from '../../../public/images/ROHlogo.svg.svg'


const Digest = () => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

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
    <div className={styles.main}>
        <div className={styles.subscription}>
            <div className={styles.header}>
                <button onClick={disHandler}><img src='images/discordImage.svg' alt='' width='24' height='24'/> <Text>Discord</Text></button>
                <button onClick={tikHandler}><img src='images/tiktok (1).svg' alt='' width='24' height='24'/> <Text>TikTok</Text></button>
                <button onClick={twitHandler}><img src='images/twitterImage.svg' alt='' width='24' height='24'/> <Text>Twitter</Text></button>
                <button onClick={instHandler}><img src='images/instagramImage.svg' alt='' width='24' height='24'/> <Text>Instagram</Text></button>
            </div>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>
                        JOIN OUR WeeKLY DIGeST
                    </p>
                    <p>
                        Get exclusive promotions & updates straight to your inbox.
                    </p>
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
                    <button>
                    {/* onClick={subscribeHandler}>{loading ? (
                        <Loader/>
                        ) : (
                            'Subscribe'
                        )} */}
                    </button>
                    <div className={styles.left}></div>
                    <div className={styles.right}></div>
                </div>
            </div>
            <div className={styles.leftDivider}></div>
      </div>
      <div className={styles.promotion}>
        <Image className={styles.logo} alt='' src={rohLogo}/>
        <p className={styles.footer}>
          Ⓒ ROH 2023
        </p>
        <div className={styles.divider}></div>
        <div className={styles.topFirst}></div>
        <div className={styles.topSecond}></div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.mainCircle}></div>
        <picture><img className={styles.firstElipse} alt='' width='198' height='198' src='images/Ellipse.svg' /></picture>
        <picture><img className={styles.secondElipse} alt='' width='198' height='198' src='images/Ellipse.svg' /></picture>
        <picture><img className={styles.thirdElipse} alt='' width='198' height='198' src='images/Ellipse.svg' /></picture>
        <picture><img className={styles.fourthElipse} alt='' width='198' height='198' src='images/Ellipse.svg' /></picture>
      </div>
    </div>
  )
}

export default Digest