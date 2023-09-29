'use client'

import React, { useEffect, useRef } from 'react';
import styles from './Ancient.module.scss';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';


const Ancient = () => {

  const textRef = useRef(null); // Ссылка на текстовый элемент
  let letters: any = []; // Массив для хранения букв
  const text = `The history of the world is a vast and fascinating subject that encompasses countless eventscivilizationsand developments From the earliest recorded civilizations to the present daythe story of humanity is filled with triumphsconflicts discoveriesand innovationsIn this textwe willxplorariousperiodsandasptsoforldhistoryhighlightingkymomntsandtheirsignifianAncintHistoryThoriginsofhumaniilizationanbtradbaktothancintorldhrsvralinfluntialivilizationsmergedMesopotamia located in the region of modern-day Iraqwitnessed the rise of SumeriansAkkadians Babylonians, and Assyrians These cultures developed complex systems of writing, governanand architectureleaving behind monumental structures such as the ziggurats and the Code of Hammurabi In ancient Egypt the Nile River facilitated the growth of a prosperous society that constructed impressipyramidsdeveloped hieroglyphic writing and fostered a unique religious and cultural belief systemThe Pharaohs ruled with divine authorityand the construction of the Great Pyramids at Giza stands as a testament to their power and ambition The Indus Valley Civilization, situated in presentday Pakistan and India flourished aroundBand boasted advanced urban planningfficient sewage systemsand a writing system that remains undeciphered to this day This highly organized society played a significant role in the development of South Asian culture. Classical Antiquity: The period of classical antiquity witnessed the rise and fall of some of the most influential civilizations in history. Ancient Greece, known for its city-states and philosophers, including Socrates, Plato, and Aristotle, laid the foundation for Western philosophy, democracy, and the arts. The Greeks also excelled in various fields such as mathematics, astronomy, and literature, with Homer's epic poems, the Iliad and the Odyssey, still regarded as literary masterpieces. The Roman Empire, which emerged after the fall of Greece, spread its influence across Europe, North Africa, and the Middle East. Roman engineering marvels, such as aqueducts, roads, and the Colosseum,`; // Ваш текс

  const [ref, inView] = useInView({
    triggerOnce: true, // Анимация будет запущена только один раз
    threshold: 0.5, // Когда более 50% контейнера видно в окне, считаем его видимым
  });

  const animateLetters = () => {
    gsap.to(letters, {
      autoAlpha: 1,
      duration: 1,
      start: 'top bottom',
      stagger: {
        each: 0.01,
        from: 'random',
      },
    });
  };


  const splitText = () => {
    const textArray = text.split('');
    letters = textArray.map((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = 0;
      textRef.current.appendChild(span);
      return span;
    });
    animateLetters(); // Вызываем анимацию после добавления всех букв в DOM
  };

  useEffect(() => {
    splitText();
  }, []);

  useEffect(() => {
    if (inView) {
      animateLetters();
    }
  }, [inView]);

  return (
    <div className={styles.ancient}>
        {/* <div className={styles.container}>
            <img src='ancients.png' alt='' width={1920} height={480}/>
        </div> */}
        <div className={styles.runes}  ref={(element) => { ref(element); textRef.current = element; }}></div>
    </div>
  )
}

export default Ancient