import { buscarHeroe, buscarHeroeAsync } from './promesas';

const heroesId = [ 'capi', 'iron', 'spider' ];
const heroesPromesas = heroesId.map( buscarHeroe );

export const obtenerHeroesArr = async() => {

    return await Promise.all( heroesId.map( buscarHeroe ) );

    // const heroesArr = [];

    // for( const id of heroesId ) {

    //     heroesArr.push( buscarHeroe(id) );

    // }


    // return await Promise.all( heroesArr );

};

export const obtenerHeroeAwait = async( id ) => {

    try {

        const heroe = await buscarHeroeAsync( id );

        return heroe;
        
    } catch (err) {

        console.log( 'CATCH!!!');
        
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
        
    }
}

export const heroesCiclo = async() => {

    console.time( 'HeroesCiclos' );

    for await( const heroe of heroesPromesas ) {

        console.log( heroe );

    }

    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log( heroe ));

    console.timeEnd( 'HeroesCiclos' );

}