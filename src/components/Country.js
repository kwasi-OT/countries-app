import React from 'react';
import { useEffect, useState } from 'react';
import { Axios } from 'axios';

const apiUrl = 'https://restcountries.com/v3.1/all'

const Country = () => {
    return (
        <div className='countryList mt-4'>
            <div className='countryCard'>
                <img src='../assets/Germany.png' alt='German flag'/>
                <div className='countryText'>
                    <h3 className='countryName'>Germany</h3>
                    <div className='countryMeta'>
                        <p><b>Population:</b> 81,770,900</p>
                        <p><b>Region:</b> Europe</p>
                        <p><b>Capital:</b> Berlin</p>
                    </div>
                </div>
            </div>
            <div className='countryCard'>
                <img src='../assets/America.png' alt='American flag'/>
                <div className='countryText'>
                    <h3 className='countryName'>United States of America</h3>
                    <div className='countryMeta'>
                        <p><b>Population:</b> 323,947,000</p>
                        <p><b>Region:</b> Americas</p>
                        <p><b>Capital:</b> Washington, D.C.</p>
                    </div>
                </div>
            </div>
            <div className='countryCard'>
                <img src='../assets/Brazil.png' alt='Brazilian flag'/>
                <div className='countryText'>
                    <h3 className='countryName'>Brazil</h3>
                    <div className='countryMeta'>
                        <p><b>Population:</b> 206,135,893</p>
                        <p><b>Region:</b> Americas</p>
                        <p><b>Capital:</b> Brasilia</p>
                    </div>
                </div>
            </div>
            <div className='countryCard'>
                <img src='../assets/Iceland.png' alt='Iceland flag'/>
                <div className='countryText'>
                    <h3 className='countryName'>Iceland</h3>
                    <div className='countryMeta'>
                        <p><b>Population:</b> 334,300</p>
                        <p><b>Region:</b> Europe</p>
                        <p><b>Capital:</b> Reykjavik</p>
                    </div>
                </div>
            </div>
            <div className='countryCard'>
                <img src='../assets/Afghanistan.png' alt='Afghan flag'/>
                <div className='countryText'>
                    <h3 className='countryName'>Afghanistan</h3>
                    <div className='countryMeta'>
                        <p><b>Population:</b> 27,657,145</p>
                        <p><b>Region:</b> Asia</p>
                        <p><b>Capital:</b> Kabul</p>
                    </div>
                </div>
            </div>
            <div className='countryCard'>
                <img src='../assets/Aland Island.png' alt='Aland Islands flag'/>
                <div className='countryText'>
                    <h3 className='countryName'>Aland Islands</h3>
                    <div className='countryMeta'>
                        <p><b>Population:</b> 28,875</p>
                        <p><b>Region:</b> Europe</p>
                        <p><b>Capital:</b> Mariehamn</p>
                    </div>
                </div>
            </div>
            <div className='countryCard'>
                <img src='../assets/Albania.png' alt='Albanian flag'/>
                <div className='countryText'>
                    <h3 className='countryName'>Albania</h3>
                    <div className='countryMeta'>
                        <p><b>Population:</b> 2,886,026</p>
                        <p><b>Region:</b> Europe</p>
                        <p><b>Capital:</b> Tirana</p>
                    </div>
                </div>
            </div>
            <div className='countryCard'>
                <img src='../assets/Algeria.png' alt='Algerian flag'/>
                <div className='countryText'>
                    <h3 className='countryName'>Algeria</h3>
                    <div className='countryMeta'>
                        <p><b>Population:</b> 40,400,000</p>
                        <p><b>Region:</b> Africa</p>
                        <p><b>Capital:</b> Algiers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country;