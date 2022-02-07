import { buscarHeroe as buscarHeroeCallbacks } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// buscarHeroe( heroeId1, ( err, heroe1 ) => {

//     if( err ) { return console.error( heroeId1 ); }

//     buscarHeroe( heroeId2, ( err, heroe2 ) => {

//         if( err ) { return console.error( heroeId ); }
    
//     });

// });


// buscarHeroe( heroeId2 ).then( heroe => {
//     console.log( `Enviando a ${ heroe.nombre } a la misión` );
// })


Promise.all( [ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ] )
            .then(([heroe1, heroe2]) => {
    console.log( `Enviando a ${ heroe1.nombre } y ${ heroe2.nombre }  a la misión` );
});


console.log('Fin de programa');