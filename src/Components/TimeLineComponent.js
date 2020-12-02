import React from 'react';
import './Styles/TimeLineComponent.css'

function Timeline() {
    return (
        <div className="container timeline">
            <div className="row">
                <button type="button" className="btn btn-link">LIVE</button>
                <button type="button" className="btn btn-link">1D</button>
                <button type="button" className="btn btn-link">1W</button>
                <button type="button" className="btn btn-link">3M</button>
                <button type="button" className="btn btn-link active" aria-pressed="true">1Y</button>
                <button type="button" className="btn btn-link">ALL</button>
            </div>
            
        </div>
    )
}

export default Timeline
