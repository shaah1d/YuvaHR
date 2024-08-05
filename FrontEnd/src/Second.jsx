import React from 'react';
import './Second.css';
import { Stack } from '@mui/material';

function second() {
  return (
    <Stack
    direction={{ xs: 'column', lg: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
    className='box2'
  >
    <div className="containers">
        <h1 style={{ textAlign: 'center'}}>1000+</h1>
       <h3>People placed</h3>
    </div>
    <div className="containers">
        <h1 style={{ textAlign: 'center'}}>15+</h1>
        <h3>Years of experience</h3>
    </div>
    <div className="containers">
        <h1 style={{ textAlign: 'center'}}>12+</h1>
        <h3>Well reputed companies</h3>
    </div>
   </Stack>
  )
}

export default second