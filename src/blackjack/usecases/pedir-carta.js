/**
 * Esta función me permite obtener una nueva carta
 * @param {Arry<string>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = ( deck ) => {

    //let deck = [];

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}