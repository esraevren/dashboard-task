import React from  'react';
import {Bar} from 'react-chartjs-2'


const Perpetual = () => {
    return <div>
        <Bar 
        data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets:[
                {
                    label: '# of votes',
                    data: [12,129,3,5,2,3],
                    backgroundColor: 'red',
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
            ],
        }}
        height={200}
        width={300}
        options={{
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }}
        />
    </div>
}

export default Perpetual;