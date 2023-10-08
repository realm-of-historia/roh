import React from "react";
import styles from './History.module.scss'
import SimpleInput from "@/components/UI/SimpleInput/SimpleInput";
import {useForm} from 'react-hook-form'
import Cards from "./Cards/Cards";
import UserButtonBlack from "@/components/UI/buttons/UserButtonBlack/UserButtonBlack";


export default function HistoryView() {

    const {register} = useForm()

    return(
        <div>
            <div style={{display: 'flex'}} className={styles.inputBlock}>
                <SimpleInput 
                placeholder='Search'
                isContacts={true}
                icon='search-icon'
                register={register}
                name='historySearch'
                ></SimpleInput>
                <UserButtonBlack text='File Manager'></UserButtonBlack>
            </div>  
            <Cards></Cards>
        </div>
    )
}