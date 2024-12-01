import React from 'react';

function Hero() {
    return ( 
       <div className='container p-5 md-5'>
        <div className='row text-center'>
          <img src='\media\homeHero.png' alt='Hero' className='mb-5'></img>
          <h1 className='mt-5' >Invest in everything</h1>
          <p className='mr-5'>online platform for investing in stock,derivatives,mutlual funds and many more</p>
          <a className="nav-link active" href="/signup"> 
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", marginRight:"5%" }}
        >
            Sign up
        </button>
        </a>
          </div>
       </div>
    );
}

export default Hero;
