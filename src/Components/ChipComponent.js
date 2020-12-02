import React from 'react';
import './Styles/ChipComponent.css'

function Chip(props) {
    return (
        <div>
            <div className='chip'>
                <div className="chip-avatar">
                    <img src={props.image} alt={''} width={10} height={10}/>
                </div>
                <div className="chip-label">
                    <span>{props.label}</span>
                </div>
            </div>
        </div>
    )
}

export default Chip
