// src/SearchComponent.js
import React, { useState } from 'react';
import RideCard from './RideCard';
import searchcom from './searchcomponent.module.css';

const SearchComponent = ({ rides }) => {
  const [searchSource, setSearchSource] = useState('');
  const [searchDestination, setSearchDestination] = useState('');
  const [searchDate, setSearchDate] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filtered = rides.filter(
      (ride) =>
        ride.source.toLowerCase().includes(searchSource.toLowerCase()) &&
        ride.destination.toLowerCase().includes(searchDestination.toLowerCase()) &&
        ride.date.includes(searchDate)
    );
    setSearchResults(filtered);
  };

  const handleCloseCard = (rideId) => {
    setSearchResults((prevResults) => prevResults.filter((ride) => ride._id !== rideId));
  };

  return (
    <div className={searchcom.search_container}>
      <h2>Search Rides</h2>
      <div>
        <label>
          Source:
          <input
            type="text"
            value={searchSource}
            onChange={(e) => setSearchSource(e.target.value)}
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            value={searchDestination}
            onChange={(e) => setSearchDestination(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </label>
        <button className={searchcom.search_button} onClick={handleSearch}>Search</button>
      </div>
      <div className={searchcom.search_result}>
      {searchResults.map((ride) => (
        <RideCard key={ride._id} ride={ride} onClose={() => handleCloseCard(ride._id)} />
      ))}
      </div>
    </div>
  );
};

export default SearchComponent;
