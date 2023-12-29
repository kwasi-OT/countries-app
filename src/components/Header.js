import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';

const Header = () => {
    return (
        <div className='nav'>
            <div className='navBar'>
                <div>
                    <h3 className='title'>Where in the world?</h3>
                </div>
                <div className='d-flex gap-2 mt-2'>
                    <HiOutlineMoon size='1rem' color='#111517' className='mb-3'/>
                    <p className='toggleText'>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
