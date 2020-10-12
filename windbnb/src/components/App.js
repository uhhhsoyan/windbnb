import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StayList from './StayList';
import Header from './Header';
import TitleRow from './TitleRow';
import SearchModal from './SearchModal';

const App = () => {
    const [stays, setStays] = useState([]);
    const [filteredStays, setFilteredStays] = useState(stays);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [guests, setGuests] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchListings = async () => {
            const response = await axios.get('./stays.json');
            setStays(response.data);
            setFilteredStays(response.data);
        }
        fetchListings();
        
    }, [])

    const filterStays = (city, country, guests) => {
        return stays.filter(stay => (stay.country === country || !country) && (stay.city === city || !city) && stay.maxGuests >= guests)
    }
    
    const updateSearchFilter = () => {

    }

    return (
        <div className="container">
            <Header 
                city={city}
                onCityChange={setCity}
                country={country}
                onCountryChange={setCountry}
                guests={guests}
                onGuestsChange={setGuests}
                toggleModal={setShowModal}
            />
            <SearchModal
                showModal={showModal}
                toggleModal={setShowModal}
                city={city}
                onCityChange={setCity}
                country={country}
                onCountryChange={setCountry}
                guests={guests}
                onGuestsChange={setGuests}
            />
            <TitleRow stayCount={filterStays(city, country, guests).length}/>
            <StayList stays={filterStays(city, country, guests)}/>
        </div>
    )
}

export default App;