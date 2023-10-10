import React from "react";
import styles from './Graph.module.scss'
import Icon from "@/components/UI/Icon/Icon";
import { Line } from 'react-chartjs-2';


export default function Graph() {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
            display: false
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };

      const labels = ['Apr 04', 'Apr 07', 'Apr 10', 'Apr 13', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23'];

      const dataGraph = [333, 353, 345, 367, 542, 510, 434, 543, 554, 424]

    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Dataset 2',
            data: dataGraph,
            borderColor: '#583F21',
            backgroundColor: 'rgba(56, 48, 39, 15%)',
          },
        ],
      };

    return (
        <div className={styles.graph}>
            <div className={styles.left}>
              <div className={styles.container}>
                <p className={styles.title}>TOTAL WALLeT NeT WORTH</p>
                <div className={styles.calendar}>
                  <p>7 May 2023 - 5 Jun 2023</p>
                  <Icon label='calendar'></Icon>
                </div>
              </div>
            <Line options={options} data={data} />;
            </div>
            <div className={styles.right}>
              <img alt="" src="/lobby.png" width={480} height={597}/>
            </div>
        </div>
    )
}