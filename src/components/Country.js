import React from 'react';
import { Germany } from '../assets/Germany.png';
import { America } from '../assets/America.png';
import { Brazil } from '../assets/Brazil.png';
import { Albania } from '../assets/Albania.png';
import { Iceland } from '../assets/Iceland.png';
import { Aland } from '../assets/Aland Island.png';
import { Algeria } from '../assets/Algeria.png';
import { Afghanistan } from '../assets/Afghanistan.png';

const Country = () => {
    return (
        <div>
            <div>
                <img src={Germany} alt='German flag'/>
                <div>
                    <h3>Germany</h3>
                    <p><b>Population:</b>81,770,900</p>
                    <p><b>Region:</b>Europe</p>
                    <p><b>Capital</b>Berlin</p>
                </div>
            </div>
            <div>
                <img src={America} alt='American flag'/>
                <div>
                    <h3>United States of America</h3>
                    <p><b>Population:</b>323,947,000</p>
                    <p><b>Region:</b>Americas</p>
                    <p><b>Capital</b>Washington, D.C.</p>
                </div>
            </div>
            <div>
                <img src={Brazil} alt='Brazilian flag'/>
                <div>
                    <h3>Brazil</h3>
                    <p><b>Population:</b>206,135,893</p>
                    <p><b>Region:</b>Americas</p>
                    <p><b>Capital</b>Brasilia</p>
                </div>
            </div>
            <div>
                <img src={Iceland} alt='Iceland flag'/>
                <div>
                    <h3>Iceland</h3>
                    <p><b>Population:</b>334,300</p>
                    <p><b>Region:</b>Europe</p>
                    <p><b>Capital</b>Reykjavik</p>
                </div>
            </div>
            <div>
                <img src={Afghanistan} alt='Afghan flag'/>
                <div>
                    <h3>Afghanistan</h3>
                    <p><b>Population:</b>27,657,145</p>
                    <p><b>Region:</b>Asia</p>
                    <p><b>Capital</b>Kabul</p>
                </div>
            </div>
            <div>
                <img src={Aland} alt='Aland Islands flag'/>
                <div>
                    <h3>Aland Islands</h3>
                    <p><b>Population:</b>28,875</p>
                    <p><b>Region:</b>Europe</p>
                    <p><b>Capital</b>Mariehamn</p>
                </div>
            </div>
            <div>
                <img src={Albania} alt='Albanian flag'/>
                <div>
                    <h3>Albania</h3>
                    <p><b>Population:</b>2,886,026</p>
                    <p><b>Region:</b>Europe</p>
                    <p><b>Capital</b>Tirana</p>
                </div>
            </div>
            <div>
                <img src={Algeria} alt='Algerian flag'/>
                <div>
                    <h3>Algeria</h3>
                    <p><b>Population:</b>40,400,000</p>
                    <p><b>Region:</b>Africa</p>
                    <p><b>Capital</b>Algiers</p>
                </div>
            </div>
        </div>
    )
}

export default Country;
