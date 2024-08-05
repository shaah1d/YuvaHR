import React from 'react'
import './Home.css';
import Second from './Second';
import Third from './Third';
import FAQ from './Faq';
import { Stack } from '@mui/material';

function Home() {
  return (
    <>
         <Stack
  direction={{ xs: 'column', lg: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
  style={{ height: '100vh' }}
>
  <div className='col'>
    <div>
    <img src="\cropped.png" alt="" className='logo'/>
      <p className='hero-elements'>
        At YuvaHR, we bridge the gap between skilled IT professionals and innovative businesses, fostering a collaborative environment where both thrive. Our dedicated team works tirelessly to match top talent with leading companies, ensuring mutual growth and success. By understanding the unique needs of both job seekers and employers, we create meaningful connections that drive the IT industry forward.
      </p>
      <form action="/contact" className='hero-elements'>
        <button>Contact us now!</button>
      </form>
    </div>
  </div>
  <div className='col col1'>
    <img src="/imagehero.png" alt="hero" className='image' />
  </div>
</Stack>

      
        <Second />
        <Third />
        <FAQ />
      </>
      )
}

    export default Home