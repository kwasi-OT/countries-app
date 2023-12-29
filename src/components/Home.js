import React from 'react'
import SearchForm from './SearchForm'
import RegionSelector from './RegionSelector'
import Countries from './Countries'

const Home = () => {
    return (
        <div>
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
