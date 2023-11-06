import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';

const Navigation = () => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    <h3>Where in the world?</h3>
                </div>
                <div className='d-flex align-items-center '>
                    <HiOutlineMoon/>
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
