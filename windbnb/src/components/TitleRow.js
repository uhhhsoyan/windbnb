import React from 'react';

const TitleRow = (props) => {
    return (
        <div className="title-row" >
            <h3 className="ui header">Stays in Finland</h3>           
            <p>{props.stayCount} stays</p>
        </div>
    )
}

export default TitleRow