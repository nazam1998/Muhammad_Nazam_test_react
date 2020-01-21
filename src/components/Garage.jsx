import React from 'react';
import Vehicule from './Vehicule';
const Garage = (props) => {
    const liste = props.liste;
    const setListe = props.setListe;
    return (
        <div className='row'>
            {liste.map((e, index) => <Vehicule info={e} key={index} />)}
        </div>
    )
};
export default Garage
