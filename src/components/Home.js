import React from 'react'
import SearchForm from './SearchForm'
import RegionSelector from './RegionSelector'
import Countries from './Countries'

const Home = () => {
    return (
        <div className='app'>
            <div className='appContainer'>
                <div className='searchGroup'>
                    <SearchForm />
                    <RegionSelector />
                </div>
                <Countries />
            </div>
        </div>
    )
}

export default Home
