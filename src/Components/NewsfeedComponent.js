import React from 'react';
import LineGraph from './LineGraphComponent';
import TimeLine from './TimeLineComponent';
import './Styles/NewsfeedComponent.css'


function NewsfeedComponent() {
    return (
            <div className="col-12 col-md-8">
                <div className="newsfeed-portfolio">
                    <h1>$114,600.84</h1>
                    <p>+$44.63 (+0.04%) Today</p>
                </div>
                <LineGraph />
                <TimeLine />
            </div>
    )
}

export default NewsfeedComponent
