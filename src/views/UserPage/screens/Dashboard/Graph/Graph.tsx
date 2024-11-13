import styles from './Graph.module.scss'
import Icon from "@/components/UI/Icon/Icon";
import Calendar from "react-calendar";
import React, {useState, useEffect} from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Stock from './Stock/Stock';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );


export default function Graph() {

  const [date, setDate] = useState<any>(new Date(2023, 9, 5));
  const [formattedDate, setFormattedDate] = useState('')


  const [dateTo, setDateTo] = useState<any>(new Date())
  const [formattedDateTo, setFormattedDateTo] = useState('')


  const [dateClickedCounter, setDateClickedCounter] = useState(0);


  const [dataGraph, setDataGraph] = useState([333, 353, 333, 353, 373, 393, 383, 353, 333, 353])


// Конвертировние даннывх
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
  




    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
            display: false
          },
          zoom: {
            pan: {
                enabled: true,
                mode: 'x'
            },
            zoom: {
                pinch: {
                    enabled: true
                },
                wheel: {
                    enabled: true
                },
                mode: 'x',
            }
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              // padding: 30,
            }
          },

          y: {
            min: 300,
            max: 400,
            ticks: {
              stepSize: 10,
              callback: (value: any) => value + '$',
            },
            grid: {
              color: '#583F21',

            },
            border: {
              dash: [5, 5],
              color: '#000',
              display: false
            }
          }
        },
      };

      const labels = ['Apr 04', 'Apr 07', 'Apr 10', 'Apr 13', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23'];

    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Dataset 2',
            data: dataGraph,
            borderColor: '#583F21',
            pointBorderColor: 'transparent',
            backgroundColor: 'rgba(56, 48, 39, 15%)',
            tension: 0.4,
          },
        ],
      };

      const onChange = (data: any) => {
        if (dateClickedCounter % 2 === 0) {
          setDate(data);
        } else {
          setDateTo(data);
        }

        const randomDataGraph = labels.map(() => Math.floor(Math.random() * (400 - 300 + 1) + 300));
        setDataGraph(randomDataGraph);

        setDateClickedCounter(dateClickedCounter + 1);
      };

    return (
        <div className={styles.graph}>
            <div className={styles.left}>
              <div className={styles.container}>
                <p className={styles.title}>TOTAL WALLeT NeT WORTH</p>
                <div className={styles.calendar}>
                  <p>{formattedDate != '' ?  formattedDate : `7 May 2023`} - {formattedDateTo != '' ? formattedDateTo : '5, Jun 2023'}</p> 
                  <Icon label='calendar'></Icon>
                  <Calendar locale='en' className={styles.calendarContainer} onChange={onChange} value={date}/>
                </div>
              </div>
              <Stock amount='12.706' percentage={4.5} isDown={false} month='april'></Stock>
            <div className={styles.graphic}><Line options={options} data={data} /></div>
            </div>
            <div className={styles.right}>
              <img alt="" src='/lobby.png' width={480} height={597}/>
            </div>
        </div>
    )
}