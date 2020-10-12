import React from 'react';
import StayCard from './StayCard';

const StayList = (props) => {
    const stays = props.stays.map(stay => {
        return (
            <StayCard 
                key={stay.title}
                img={stay.photo}
                super={stay.superHost}
                type={stay.type}
                beds={stay.beds}
                rating={stay.rating}
                title={stay.title}
            />
        )
    })
    
    return (
        <div className="stay-list">
            {stays}
        </div>
    )
}

export default StayList;