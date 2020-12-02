import React from 'react';
import Header from './HeaderComponent';
import './Styles/MainComponent.css'
import NewsfeedComponent from './NewsfeedComponent';
import Stats from './StatsComponent'

function MainComponent() {
    return (
        <div className="main-component">
            <Header />
            <div className="container">
                <div className="row">
                    <NewsfeedComponent />
                    <Stats />
                </div>
            </div>
        </div>
    )
}

export default MainComponent
