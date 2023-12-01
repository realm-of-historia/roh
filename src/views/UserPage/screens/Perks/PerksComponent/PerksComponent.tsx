"use client"

import React from 'react'
import styles from './PerksComponent.module.scss'
import Text from '@/components/Text/Text'
import Icon from '@/components/UI/Icon/Icon'
import UserCard from '../UserCard/UserCard'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import UserButtonBlack from '@/components/UI/buttons/UserButtonBlack/UserButtonBlack'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '@/store/store'
import Divider from '@/components/Divider/Divider'

export default function PerksComponent({ cards }: { cards: any }) {
  const [currentPage, setCurrentPage] = useState(0);

  // const isChecked: any = useAuthStore((state: any) => (state.isAllChecked))

  // const cardsPerPage = 5;

  // const handlePageChange = (direction: 'prev' | 'next') => {
  //   if (direction === 'prev') {
  //     if (currentPage > 0) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   } else if (direction === 'next') {
  //     if (currentPage < Math.ceil(cards.length / cardsPerPage) - 1) {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   }
  // };

  // const handlePageChangeNumber = (newPage: number) => {
  //   if (newPage >= 0 && newPage < Math.ceil(cards.length / cardsPerPage)) {
  //     setCurrentPage(newPage);
  //   }
  // }


  // const startIndex = currentPage * cardsPerPage;
  // const endIndex = startIndex + cardsPerPage;
  // const visibleCards = cards.slice(startIndex, endIndex);

  // const { register } = useForm()

  // const [perk, setPerk] = useState('')
  const dataTable = {
    venue: 'Venue',
    location: 'Location',
    perk: 'Perk',
    status: 'Status',
    table: [
      // {
      //   venue: 'The Beach',
      //   location: 'Yerevan, Armenia',
      //   perk: '15% discount',
      //   status: 'Active',
      // },
      // {
      //   venue: 'The Beach',
      //   location: 'Yerevan, Armenia',
      //   perk: '15% discount',
      //   status: 'Active',
      // },
      // {
      //   venue: 'The Beach',
      //   location: 'Yerevan, Armenia',
      //   perk: '15% discount',
      //   status: 'Active',
      // },
      // {
      //   venue: 'The Beach',
      //   location: 'Yerevan, Armenia',
      //   perk: '15% discount',
      //   status: 'Active',
      // },
    ]

  }
  return (
    <div className={styles.perks}>
      {/* <div style={{display: 'flex'}} className={styles.inputBlock}>
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
                <UserCard isRuler={true} isChecked={isChecked} product='Product' isWeight={true} sku='SKU' qty='QTY' price='Price' status='Status' actions='Actions'></UserCard>
                {visibleCards.map((element: any, index: any) => (
                    <UserCard
                        key={index}
                        product={element[0]}
                        sku={element[1]}
                        qty={element[2]}
                        price={element[3]}
                        status={element[4]}
                        actions={element[5]}
                        isChecked={isChecked}
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
            </div> */}
      {
        cards ?
          <>
            <div className={styles.wrapperTable}>
              <Divider position={'top left'} noAnim={true} opacityNo={true} />
              <Divider position={'bottom left'} noAnim={true} horizontal={true} opacityNo={true} />
              <div className={styles.wrapperTextTable}>
                <p className={styles.headerTable}>{dataTable?.venue}</p>
                <Divider position={'top right'} noAnim={true} opacityNo={true} />
              </div>
              <div className={styles.wrapperTextTable}>
                <p className={styles.headerTable}>{dataTable?.location}</p>
                <Divider position={'top right'} noAnim={true} opacityNo={true} />
              </div>
              <div className={styles.wrapperTextTable}>
                <p className={styles.headerTable}>{dataTable?.perk}</p>
                <Divider position={'top right'} noAnim={true} opacityNo={true} />
              </div>
              <div className={styles.wrapperTextTable}>
                <p className={styles.headerTable}>{dataTable?.status}</p>
                <Divider position={'top right'} noAnim={true} opacityNo={true} />
              </div>
            </div>
            {
              cards?.perks.map((_: any, i: number) => (
                <div key={i + 4994} className={styles.wrapperTable}>
                  <Divider position={'top left'} noAnim={true} opacityNo={true} />
                  <Divider position={'bottom left'} noAnim={true} horizontal={true} opacityNo={true} />
                  <div className={styles.wrapperTextTable}>
                    <p >{_?.perk_name}</p>
                    <Divider position={'top right'} noAnim={true} opacityNo={true} />
                  </div>
                  <div className={styles.wrapperTextTable}>
                    <p >{_?.seller_address}</p>
                    <Divider position={'top right'} noAnim={true} opacityNo={true} />
                  </div>
                  <div className={styles.wrapperTextTable}>
                    <p >{_?.discount}% discount</p>
                    <Divider position={'top right'} noAnim={true} opacityNo={true} />
                  </div>
                  <div className={styles.wrapperTextTable}>
                    <p >{_?.active ? 'Active' : 'Inactive'}</p>
                    <Divider position={'top right'} noAnim={true} opacityNo={true} />
                  </div>
                </div>
              ))
            }
          </>
          :
          <div className={styles.wrapperloader}>
              <div className={styles.loader}></div>
          </div>
      }

    </div>
  )
}