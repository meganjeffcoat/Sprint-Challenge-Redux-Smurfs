import React from 'react';

import Smurf from './Smurf';
import papasmurf from './papasmurf.png'


const SmurfList = props => {
    return(
        <div className='smurf-container'>
            <h1>Smurf List</h1>
            <img src={papasmurf} alt='papasmurf' />
            <div className='smurf-list'>
            {props.smurfs.map((s, i) => <Smurf smurf={s} key={i}/>)}
            </div>
        </div>
    )
}

export default SmurfList; 