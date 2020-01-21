import React, { useState } from 'react';
import Garage from './components/Garage';



const App = () => {
    const [liste, setListe] = useState([
        { nom: 'Mercedes Benz S 260', annee: '1991', couleur: 'Bleu', type: 'Essence', valide: 'Non validé' },
        { nom: 'Fiat 500', annee: '2010', couleur: 'Noire', type: 'Essence', valide: 'Non validé' },
        { nom: 'Volkswagen Crafter', annee: '2016', couleur: 'Blanche', type: 'Diesel', valide: 'Validé' },
        { nom: 'BMW 114', annee: '2012', couleur: 'Bleu', type: 'Essence', valide: 'Non validé' },
        { nom: 'Audi A3', annee: '2015', couleur: 'Rouge', type: 'Diesel', valide: 'Validé' }
    ]);
    return (
        <div className='text-center'>
            <h1 className='my-5 text-info'>Concessionnaire Random</h1>
            <Garage liste={liste} />
        </div>
    )
};
export default App;
