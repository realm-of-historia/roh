import React, { useEffect, useMemo } from 'react'
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
        useAuthStore.setState({isAllChecked: isAllChecked})
      }

      const handleLabelClick = useMemo(() => {
        if (isRuler) {
          useAuthStore.setState({isAllChecked: isAllChecked})
        }
      }, [isAllChecked])

    return(
        <label className={styles.checkbox}  htmlFor={field.id}>
            <input type="checkbox" {...field} onClick={() => {setIsAllChecked(!isAllChecked)}} checked={isCheckedState} onChange={handleCheckChange}></input>
            <span className={styles.checkmark}>
                <Icon label='checkbox'></Icon>
            </span>
        </label>
    )
}