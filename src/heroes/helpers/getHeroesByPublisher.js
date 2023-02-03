import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    //When the publisher doesn´t exist
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }
    //When the publisher exists
    return heroes.filter( heroe => heroe.publisher === publisher );

}