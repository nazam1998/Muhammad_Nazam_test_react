import React, { useState } from 'react';

const Vehicule = (props) => {

    let info = [];

    const [valid, setValid] = useState(props.info['valide']);

    for (let key in props.info) {
        info.push(key);
    }

    return (

        <div className={'my-3 col text-center p-2 ' + (valid === 'Non validé' && 'border border-danger')}>

            <ul className='text-left'>

                {info.map((e, index) => <li key={index}>{e + ' : ' + (e !== 'valide' ? props.info[e] : valid)}</li>)}

            </ul>

            {valid === 'Non validé' && <button className='btn btn-success' onClick={() => { setValid('Validé') }}>Valider</button>}

        </div>

    )
};

// valid === 'Non validé' ? setValid('Validé') : setValid('Non validé')
// Cette ligne permet de switcher entre les deux états, Elle doit être placé dans l'écouteur de click du bouton

export default Vehicule;
