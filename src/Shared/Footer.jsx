import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-warp'> 
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <div>
                        <h2>HEALTH SOLUTION</h2>
                        <ul>
                            <li>Alzheimer's Disease</li>
                            <li>Diabetes Help Center</li>
                            <li>Learn About Triglycerides</li>
                            <li>Vaccine Questions?</li>
                            <li>ED Tablet</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div>
                        <h2>RECENT POST</h2>
                        <p>Proin lobortis tempus odio eget venenatis. Proin fermentum ut massa at bibendum. Proin bibendum...</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div>
                        <h2>MAPS</h2>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div>
                        <h2>CONTRACT INFO</h2>
                        <ul>
                            <li>No: 58 A, East Madison St Baltimore, MD, USA</li>
                            <li>Phone : +1 200 258 2145</li>
                            <li>
                                Email : yourname@somemail.com
                            </li>
                            <li>Web : google.com</li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;