

const heroes = {

    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones'
    },

    iron: {
        nombre: 'Ironman',
        poder: 'Mucho dinero'
    },

    spider: {
        nombre: 'Spiderman',
        poder: 'Alérgico a las arañas'
    },

}

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if( heroe ) {
        callback( null, heroes );
    } else {
        callback( `No existe héroe con el id ${ id }` );
    }
    // callback( heroe );
}