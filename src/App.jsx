import React, { useState } from 'react';
import Garage from './components/Garage';



const App = () => {

    const [liste, setListe] = useState([
        { nom: 'Mercedes Benz S 260', an: '1991', couleur: 'Bleu', conso: 'Essence', valide: 'Non validé' },
        { nom: 'Fiat 500', an: '2010', couleur: 'Noire', conso: 'Essence', valide: 'Non validé' },
        { nom: 'Volkswagen Crafter', an: '2016', couleur: 'Blanche', conso: 'Diesel', valide: 'Validé' },
        { nom: 'BMW 114', an: '2012', couleur: 'Bleu', conso: 'Essence', valide: 'Non validé' },
        { nom: 'Audi A3', an: '2015', couleur: 'Rouge', conso: 'Diesel', valide: 'Validé' }
    ]);
    return (
        <div>
            <Garage liste={liste} />
        </div>
    )
};
export default App;
