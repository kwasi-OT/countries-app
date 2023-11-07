import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = () => {
    return (
        <div>
            <AiOutlineSearch />
            <input type='text' placeholder='Search for a country…'/>
        </div>
    )
}

export default SearchForm
