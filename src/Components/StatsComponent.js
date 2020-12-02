import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../Shared/firebase';
import StatsRow from './StatsRowComponent';
import './Styles/StatsComponent.css';


const TOKEN = 'bv2rcgf48v6ru7sfc60g';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

function Stats() {

    const [ stockData, setstockData ] = useState([]);
    const [ myStocks, setmyStocks ] = useState([])

    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = [];
            snapshot.docs.map((doc) => {

              console.log(doc.data());  
              promises.push(getStocksData(doc.data().ticker)
              .then(res => {
                tempData.push({
                  id: doc.id,
                  data: doc.data(),
                  info: res.data
                })
              })
            )})
            Promise.all(promises).then(()=>{
                console.log(tempData);
              setmyStocks(tempData);
            })
        })
      }

    const getStocksData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
            .catch((error) => {
                console.error("Error", error.message);
            });
    }

    useEffect(() => {
        let tempStocksData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

        let promises = [];
        getMyStocks()
        stocksList.map((stock) => {
            promises.push(
                getStocksData(stock)
                .then((res) => {
                tempStocksData.push({
                    name: stock,
                    ...res.data
                });
            })
        )
        });

        Promise.all(promises).then(()=>{
            setstockData(tempStocksData);
            // console.log(tempStocksData)
        })
    }, [])

    return (
            <div className="col-12 col-md-4">
                <div className="container stats">
                    <div className="row">
                        <div className="stats-header col-12">
                            <p>Stocks</p> 
                        </div>
                        <div className="col-12">
                            {myStocks.map((stock) => (
                                <StatsRow
                                    key={stock.data.ticker}
                                    name={stock.data.ticker}
                                    openPrice={stock.info.o}
                                    shares={stock.data.shares}
                                    price={stock.info.c}
                                />
                            ))}
                        </div>
                        <div className="stats-header stats-lists col-12">
                            <p>Lists</p> 
                        </div>
                        <div className="stats-content col-12">
                                {stockData.map((stock) => (
                                    <StatsRow
                                        key={stock.name}
                                        name={stock.name}
                                        openPrice={stock.o}
                                        price={stock.c}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Stats
