import { Action } from '@ngrx/store';
import { State } from '../models/state.model';
import * as StateActions from '../actions/state.actions';

const initialState: State = {
    id: "1",
    name: "1",
    value: "1"
}

export function reducer(state: State[] = [initialState], action: StateActions.Actions) {
    switch (action.type) {

        case StateActions.ADD_STATE:
            return [...state, action.payload];

        case StateActions.REMOVE_STATE:
            state = state.filter((el, index) => index != action.payload);
            return state;

        default:
            return state;
    }
}