import React from 'react'

const RegionSelector = () => {
    return (
        <div>
            <select>
                <option>Filter by Region</option>
                <option value='africa'>Africa</option>
                <option value='america'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
        </div>
    )
}

export default RegionSelector
