import uuid from 'uuid';
import { SET_CARD, REMOVE_CARD } from './types';

export const setCard = (msg, cardType) => (dispatch) => {
    const id = uuid.v4();
    dispatch({
        type: SET_CARD,
        payload: { msg, cardType: id},
    });

    setTimeout( () => dispatch({ type: REMOVE_CARD, payload: id}), 10000);
}