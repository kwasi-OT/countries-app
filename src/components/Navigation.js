import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';

const Navigation = () => {
    return (
        <div className='nav'>
            <div className='navBar d-flex justify-content-between align-items-center flex-wrap'>
                <div>
                    <h3 className='title'>Where in the world?</h3>
                </div>
                <div className='d-flex gap-2 align-items-center '>
                    <HiOutlineMoon size='1rem' color='#111517' className='mb-3'/>
                    <p className='toggleText'>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
