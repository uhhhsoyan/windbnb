import React from 'react';
import triangleLogo from '../assets/logo.svg';

const Header = (props) => {

    return (
        <div className="ui secondary menu">
            <a className="item">
                <img className="ui small img" src={triangleLogo} alt="logo" />
            </a>
            <div className="right menu" onClick={() => props.toggleModal(true)}>
                <a className="ui item">
                    {(!props.city || !props.country) ? 'Add location' : `${props.city}, ${props.country}`}
                </a>
                <a className="ui item">
                    {props.guests ? `${props.guests} guests` : 'Add guests'}
                </a>
                <div className="item">
                    <div className="ui icon input">
                        <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;