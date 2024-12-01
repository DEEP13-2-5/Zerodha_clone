import React from 'react';

function Award() {
    return ( 
        <div className='container mt-5'>
        <div className='row text-center'>
            <div className='col-6 mt-3 p-5'>
                <img src='media/largestBroker.svg' alt='Award'></img>
            </div>
            <div className='col-6 p-5'>
                <h1>Largest broker in India</h1>
                <p> 2M+ zeroda contribute  to over 15% of all volume in India daily by treading and investment in :</p>
                <div className='row'>
                    <div className='col-6 p-5'>
                    <ul>
                    <li>
                        <p>Future and options</p>
                    </li>
                    <li>
                        <p>Comodity&Derivaty</p>
                    </li>
                    <li>
                        <p>Currency Derivatives</p>
                    </li>
                </ul>
            </div>
            <div className='col-6 p-5'>
                    <ul>
                    <li>
                        <p>Stock and IPOs</p>
                    </li>
                    <li>
                        <p>Direct Mutual fund</p>
                    </li>
                    <li>
                        <p>Bonds and security</p>
                    </li>
                </ul>
                    </div>
                </div>
                <img src='media\pressLogos.png' style={{width:"80%"}}></img>
            </div>
          </div>
       </div>
     );
}

export default Award ;