import React, {useState, useEffect} from "react";
import styles from './Latest.module.scss'
import Calendar from "react-calendar";
import Icon from "@/components/UI/Icon/Icon";
import Activity from "./Activity/Activity";

export default function Latest() {

    const [date, setDate] = useState<any>(new Date(2023, 9, 5));
    const [formattedDate, setFormattedDate] = useState('')
  
  
    const [dateTo, setDateTo] = useState<any>(new Date())
    const [formattedDateTo, setFormattedDateTo] = useState('')
  
  
    const [dateClickedCounter, setDateClickedCounter] = useState(0);

    const cards = [
        [['Personal Health', 'Bought Token'], ['BTC Wallet', 'Personal Account'], ['23 Jan, 22', 'Last Payment'], ['-0,0024 BTC', 'Balance']],
        [['Personal Health', 'Bought Token'], ['BTC Wallet', 'Personal Account'], ['23 Jan, 22', 'Last Payment'], ['-0,0024 BTC', 'Balance']],
        [['Personal Health', 'Bought Token'], ['BTC Wallet', 'Personal Account'], ['23 Jan, 22', 'Last Payment'], ['-0,0024 BTC', 'Balance']],
        [['Personal Health', 'Bought Token'], ['BTC Wallet', 'Personal Account'], ['23 Jan, 22', 'Last Payment'], ['-0,0024 BTC', 'Balance']],
        [['Personal Health', 'Bought Token'], ['BTC Wallet', 'Personal Account'], ['23 Jan, 22', 'Last Payment'], ['-0,0024 BTC', 'Balance']],
    ]

    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setMinutes(minutes + 1);
      }, 60000);
  
      return () => {
        clearInterval(interval);
      };
    }, [minutes]);

    useEffect(() => {
        const formattedDate = new Intl.DateTimeFormat('en-EN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(date);
    
        const formattedDateTo = new Intl.DateTimeFormat('en-EN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(dateTo);
    
        const [day, month, year] = formattedDate.split(' ');
        const [dayTo, monthTo, yearTo] = formattedDateTo.split(' ');
    
    
        const formattedDateWithoutCommas = `${month} ${day} ${year}`;
        const formattedDateToWithoutCommas = `${monthTo} ${dayTo} ${yearTo}`;
    
        setFormattedDate(formattedDateWithoutCommas);
        setFormattedDateTo(formattedDateToWithoutCommas);
    
      }, [date, dateTo]);


      const onChange = (data: any) => {
        if (dateClickedCounter % 2 === 0) {
          setDate(data);
        } else {
          setDateTo(data);
        }

        setDateClickedCounter(dateClickedCounter + 1);
      };

    return(
        <div className={styles.latest}>
            <div className={styles.dividerTop}></div>
            <div className={styles.container}>
                <p className={styles.title}>LATeST ACTIVITY</p>
                <div className={styles.calendar}>
                <p>{formattedDate != '' ?  formattedDate : `7 May 2023`} - {formattedDateTo != '' ? formattedDateTo : '5, Jun 2023'}</p> 
                <Icon label='calendar'></Icon>
                <Calendar locale='en' className={styles.calendarContainer} onChange={onChange} value={date}/>
            </div>
            </div>
            <p className={styles.update}>Updated {minutes} minutes ago</p>
            <div className={styles.activitiesContainer}>
                {cards.map((el: any, index: any) => (
                    <Activity key={index} data={el}></Activity>
                ))}
            </div>
        </div>
    )
}