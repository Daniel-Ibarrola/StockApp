import React, { useState } from 'react';
import LineGraph from './LineGraphComponent';
import TimeLine from './TimeLineComponent';
import Chip from './ChipComponent';
import './Styles/NewsfeedComponent.css';


function NewsfeedComponent() {

    const [popularTopics, setTopics] = useState([ 
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
    ]);

    return (
            <div className="col-12 col-md-8">
                <div className="newsfeed-portfolio">
                    <h1>$114,600.84</h1>
                    <p>+$44.63 (+0.04%) Today</p>
                </div>
                <LineGraph />
                <TimeLine />
                <div className="newsfeed-buying-section">
                        <h4> Buying Power </h4>
                        <h4> $4.11</h4>
                    </div>
                    <div className='newsfeed-market-section'>
                        <div className='newsfeed-market-box'>
                            <p>Cash Management</p>
                            <h2>Get a debit card and start earning interest on your cash</h2>
                            <a href="/">Get Cash Management</a>
                        </div>
                    </div>
                    <div className="newsfeed-popularlists-section">
                        <div className="newsfeed-popularlists-intro">
                            <h1>Popular lists</h1>
                            <p>Show More</p>
                        </div>
                        <div className="newsfeed-popularlists-badges">
                            {popularTopics.map((topic) => (
                                <Chip                        
                                    label={topic}
                                    image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                />
                            ))}
                        </div>
                    </div>
            </div>
    )
}

export default NewsfeedComponent
