import React from 'react';
import { useEffect, useState } from 'react';
import axios  from 'axios';

const apiUrl = 'https://restcountries.com/v3.1/all';

const Country = () => {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountry = async () => {
            setLoading(true);
            try {
                const response = await axios.get(apiUrl);
                const data = await response.data;
                
                setCountries(data);
                console.log('Countries Data:', data);
    
            } catch (error) {
                setError('An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        }
        getCountry();
    }, [])

    return (
        <div className='countryList mt-4'>
            {countries.map((country) => {
                const {
                    ccn3,
                    name,
                    capital,
                    population,
                    flags,
                    region,
                } = country

                return (
                    <div key={ccn3} className='countryCard'>
                        <img src={flags.svg} alt='{name.common} flag'/>
                        <div className='countryText'>
                            <h3 className='countryName'>{name.common}</h3>
                            <div className='countryMeta'>
                                <p><b>Population:</b> {population}</p>
                                <p><b>Region:</b> {region}</p>
                                <p><b>Capital:</b> {capital}</p>
                            </div>
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default Country;