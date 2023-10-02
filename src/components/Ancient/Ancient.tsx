import React, { useEffect, useRef, useState, useMemo } from 'react';
import styles from './Ancient.module.scss';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Ancient = () => {
  const textRef = useRef(null);
  const [letters, setLetters] = useState([]);
  const text =  `Աշխարհի պատմությունը հսկայական և հետաքրքրաշարժ թեմա է, որն ընդգրկում է անթիվ քաղաքակրթություններ և զարգացումներ Սկսած ամենավաղ քաղաքակրթություններից մինչև մեր օրերը մարդկության պատմությունը լցված է հաղթական հակամարտություններով հայտնագործություններով և նորարարություններով։ izationanbtradbaktothancintorldhrsvralinfluntialivilizationsmergedMesopotamia, որը գտնվում է ժամանակակից Իրաքի տարածաշրջանում, վկա`

  const [ref, inView] = useInView();

  const splitText = () => {
    const textArray: any = text.split('');
    setLetters(textArray);
  };

  useEffect(() => {
    splitText();
  }, []);


  return (
    <div className={styles.ancient} ref={ref}>
      <div className={styles.runes} ref={textRef}>
        {letters.map((letter, index) => (
          <span className={styles.animation} style={{
            opacity: inView ? '1' : '0',
            transition: inView ? `opacity 1.5s ease-in-out ${(Math.floor(Math.random() * 11)) / 5}s` : '',
            // animationDelay: `${index}s`
          }} 
            key={index}>{letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ancient;