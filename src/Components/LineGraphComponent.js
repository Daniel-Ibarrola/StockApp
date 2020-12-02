import React, { useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import './Styles/LineGraphComponent.css'

function LineGraphComponent() {
    const [ graphData, setGraphData ] = useState([]);
    
    const createMockData = () => {
        let data = [];
        let value = Math.random()*100;
        let EMA = 0
        for(var i = 0; i < 366; i++) {
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            // value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            EMA = (value*0.00546) + EMA*(1-0.00546);
            value = Math.random()*20;
            data.push({x: date, y: value});
        }
        setGraphData(data);
    }
    

    useEffect(()=> {
        createMockData()
    }, [])

    return (
        <div className='linegraph'>
            <Line 
                data={{
                    datasets: [
                        {
                            type: "line",
                            data: graphData,
                            backgroundColor: "black",
                            borderColor: "#5AC53B",
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0, 0, 0 0)',
                            pointBackgroundColor: 'rgba(0, 0, 0 0)',
                            pointHoverBackgroundColor: "#5AC53B",
                            pointHoverBorderColor: '#000000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false
                    },
                    scales: {
                        xAxes: [
                            {
                                type: "time",
                                time: {
                                    format: "MM/DD/YY",
                                    tooltipFormat: "ll",
                                },
                                ticks: {
                                    display: false
                                }
                            }
                        ],
                        yAxes: [{
                            ticks: {
                                display: false
                            }
                        }]
                    },
                   elements: {
                       point: {
                           radius: 0
                       }
                   }
                }}
            />
        </div>
    )
}

export default LineGraphComponent
