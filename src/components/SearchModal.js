import React, { useState } from 'react';

const SearchModal = (props) => {
    const [adultGuests, setAdultGuests] = useState(0);
    const [childGuests, setChildGuests] = useState(0);
    const [searchCity, setSearchCity] = useState(props.city);
    const [searchCountry, setSearchCountry] = useState(props.country);
    
    const modalFlag = () => {
       return props.showModal ? { display: 'block' } : { display: 'none' }
    }

    const runSearch = () => {
        props.toggleModal(false);
        props.onCityChange(searchCity);
        props.onCountryChange(searchCountry);
        props.onGuestsChange(adultGuests + childGuests);
    }

    return (
        <div className="search-modal-background" style={modalFlag()} >
            <div className="search-modal">
                <div className="ui grid ">
                    <div className="three wide column">
                        <div className="row modal-top-row">
                            <b>LOCATION</b>
                            <p>{(searchCity && searchCountry) ? `${searchCity}, ${searchCountry}` : `Add location`}</p>
                        </div>
                        <div className="row" onClick={() => {
                            setSearchCity('Helsinki')
                            setSearchCountry('Finland')
                        }}>
                            Helsinki, Finland
                        </div>
                        <div className="row" onClick={() => {
                            setSearchCity('Turku')
                            setSearchCountry('Finland')
                        }}>
                            Turku, Finland
                        </div>
                        <div className="row" onClick={() => {
                            setSearchCity('Oulo')
                            setSearchCountry('Finland')
                        }}>
                            Oulu, Finland
                        </div>
                        <div className="row" onClick={() => {
                            setSearchCity('Vassa')
                            setSearchCountry('Finland')
                        }}>
                            Vassa, Finland
                        </div>
                    </div>
                    <div className="three wide column">
                        <div className="row modal-top-row">
                            <b>GUESTS</b>
                            <p>{props.guests ? `${props.guests} guests` : `Add guests`}</p>
                        </div>
                        <div className="row">
                            <b>Adults</b>
                            <p>Ages 13 or above</p>
                            <div className="bed-counter">
                                <i className="minus square outline icon"onClick={() => setAdultGuests(adultGuests - 1)}></i>
                                {adultGuests}
                                <i className="plus square outline icon"onClick={() => setAdultGuests(adultGuests + 1)}></i>
                            </div>
                            <br />
                            <b>Children</b>
                            <p>Ages 2-12</p>
                            <div className="bed-counter">
                                <i className="minus square outline icon"onClick={() => setChildGuests(childGuests - 1)}></i>
                                {childGuests}
                                <i className="plus square outline icon"onClick={() => setChildGuests(childGuests + 1)}></i>
                            </div>
                        </div>

                        
                    </div>
                    <div className="three wide column" onClick={() => runSearch()}>
                        Search <i className="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal;