import React from 'react';

import Smurf from './Smurf';

const SmurfList = props => {
    return(
        <div className='smurf-container'>
            <h1>Smurf List</h1>
            <div className='smurf-list'>
            {props.smurfs.map((s, i) => <Smurf smurf={s} key={i}/>)}
            </div>
        </div>
    )
}

export default SmurfList; 