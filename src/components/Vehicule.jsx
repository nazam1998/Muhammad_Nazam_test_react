import React, { useState } from 'react';
const Vehicule = (props) => {
    let info = [];
    const [valid, setValid] = useState(props.info['valide']);
    for (let key in props.info) {
        info.push(key);
    }

    return (
        <div className={'my-3 border col text-center p-2 ' + (valid === 'Non validé' && 'border-danger')}>
            <ul className='text-left'>
                {info.map((e, index) => <li key={index}>{e + ' : ' + (e !== 'valide' ? props.info[e] : valid)}</li>)}
            </ul>
            {valid === 'Non validé' && <button onClick={() => { setValid('Validé') }}>Valider</button>}
        </div>
    )
};
export default Vehicule;
