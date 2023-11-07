import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = () => {
    return (
        <div className='searchForm d-flex align-items-center gap-3 mt-4'>
            <AiOutlineSearch size='1rem' color='#B2B2B2' className='searchIcon'/>
            <input type='text' placeholder='Search for a country…'/>
        </div>
    )
}

export default SearchForm
