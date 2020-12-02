import React from 'react';
import './Styles/StatsRowComponent.css';
import { db } from '../Shared/firebase';


function StatsRow(props) {

    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100

    const buyStock = () => {
        db
            .collection('myStocks')
            .where("ticker", "==", props.name)
            .get()
            .then((querySnapshot) => {
                if(!querySnapshot.empty){
                    // update the record
                    
                    querySnapshot.forEach(function(doc) {
                        db.collection('myStocks')
                        .doc(doc.id)
                        .update({
                            shares: doc.data().shares += 1
                        })
                        console.log(doc.id, " => ", doc.data());
                    });
                } else {
                    // Add a new record
                    console.log("Not available")
                    db.collection('myStocks')
                    .add({
                        ticker: props.name,
                        shares: 1
                    })
                }
               
            })

    }

    return (
        <div className="stats-container stock-button">
            <div className="row">
                <div className="col-4 stock-name">
                    <h4>{props.name}</h4>
                    <p>{props.shares &&
                        (props.shares + " shares")}</p>
                </div>
                <div className="col-4">
                    <img src="assets/images/stock.svg" height={16}/>
                </div>
                <div className="col-4 stock-numbers">
                    <p className='row-price'>${props.price}</p>
                    <p className='row-percentage'> +{Number(percentage).toFixed(2)}%</p>
                </div>
            </div>
        </div>
    )
}

export default StatsRow
