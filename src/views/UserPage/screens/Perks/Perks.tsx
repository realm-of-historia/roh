import React from 'react'
import styles from './Perks.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import UserCard from './UserCard/UserCard'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import { useState } from 'react'
import {useForm} from 'react-hook-form'

export default function Perks({cards}: {cards: any}) {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 5;

    const handlePageChange = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
          if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
          }
        } else if (direction === 'next') {
          if (currentPage < Math.ceil(cards.length / cardsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
          }
        }
      };

      const handlePageChangeNumber = (newPage: number) => {
        if (newPage >= 0 && newPage < Math.ceil(cards.length / cardsPerPage)) {
          setCurrentPage(newPage);
        }
      }

    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const visibleCards = cards.slice(startIndex, endIndex);

    const {register} = useForm()

    const [perk, setPerk] = useState('')

    return(
        <div className={styles.perks}>
            <div style={{display: 'flex'}} className={styles.inputBlock}>
                <SimpleInput 
                placeholder='Search perks'
                isContacts={true}
                icon='search-icon'
                value={perk}
                onChange={(e) => setPerk(e.target.value)}
                name='perks'
                register={register}
                ></SimpleInput>
            </div>
            <div className={styles.container}>
                <UserCard product='Product' isWeight={true} sku='SKU' qty='QTY' price='Price' status='Status' actions='Actions'></UserCard>
                {visibleCards.map((element: any, index: any) => (
                    <UserCard
                        key={index}
                        product={element[0]}
                        sku={element[1]}
                        qty={element[2]}
                        price={element[3]}
                        status={element[4]}
                        actions={element[5]}
                    ></UserCard>
                ))}
            </div>
            <div className={styles.paggination}>
                <p onClick={() => handlePageChange('prev')} className={currentPage === 0 ? styles.disabled : ''}>{'<'}</p>
                <div>
                    {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map((_, index) => (
                        <p key={index} className={index === currentPage ? styles.currentPage : ''} onClick={() => handlePageChangeNumber(index)}>
                        {index + 1}
                        </p>
                    ))}
                </div>
                <p onClick={() => handlePageChange('next')} className={currentPage === Math.ceil(cards.length / cardsPerPage) - 1 ? styles.disabled : ''}>{'>'}</p>
            </div>
        </div>
    )
}