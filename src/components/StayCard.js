import React from 'react';

const StayCard = (props) => {
    return (
        <div className="card-container">
            <div className="aspect-ratio-box">
                <img src={props.img} alt="stay thumbnail image" />
            </div>
            <div className="card-detail-row">
                <div className="card-detail-row-left">
                    {props.super ? <span className="super-host">SUPER HOST</span> : null }
                    <span>Entire apartment</span>
                    {props.beds ? <span className="spacer">|</span> : null }
                    {props.beds ? <span>{`${props.beds} beds`}</span> : null }
                </div>
                
                
                <span>{props.rating}</span>
            </div>
            <div className="card-title">
            {props.title}
            </div>
        </div>   
    )
}

export default StayCard;