import React, { useEffect } from 'react'
import styles from './CheckBox.module.scss'
import Icon from '../Icon/Icon'
import { useState } from 'react';
import { useAuthStore } from '@/store/store';


export default function CheckBox({onClick, field, isChecked, isRuler}: {onClick?: any, field: any, isChecked?: boolean, isRuler?: boolean}) {

    const [isCheckedState, setIsCheckedState] = useState(isChecked || false);
    const [isAllChecked, setIsAllChecked] = useState(false) 


    const handleCheckChange = () => {
        const newCheckedState = !isCheckedState;
        setIsCheckedState(newCheckedState);
    
        if (onClick) {
          onClick(newCheckedState);
        }
    
        field.value = newCheckedState;
      };

      useEffect(() => {
        if(isChecked) {
            setIsCheckedState(true)
        } else {
          setIsCheckedState(false)
        }
      }, [isChecked])

      const checkAll = () => {
        setIsAllChecked(!isAllChecked)
        useAuthStore.setState({isAllChecked: isAllChecked})
        console.log('hhh')
      }

      const handleLabelClick = (e: any) => {
        if (isRuler) {
          e.stopPropagation();
          checkAll();
        }
      };

    return(
        <label className={styles.checkbox} onClick={handleLabelClick} htmlFor={field.id}>
            <input type="checkbox" {...field} checked={isCheckedState} onChange={handleCheckChange}></input>
            <span className={styles.checkmark}>
                <Icon label='checkbox'></Icon>
            </span>
        </label>
    )
}