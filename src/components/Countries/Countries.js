import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Countries List</h1>
            {
                countries.map(country => console.log(country))
            }
            <div className='row row-cols-1 row-cols-md-3 g-4 m-5'>
                {
                    countries.map(country => <Country key={country.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;