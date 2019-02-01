import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    return(
        <div className='smurf-container'>
            <h1>Smurf List</h1>
            {props.smurfs.map((s, i) => <Smurf smurf={s} key={i} />)}
        </div>
    )
}

export default SmurfList;