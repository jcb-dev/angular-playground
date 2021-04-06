import { Action } from "@ngrx/store";
import { State } from '../../models/state.model';

export const ADD_STATE = '[STATE] Add';
export const REMOVE_STATE = '[STATE] Remove';

export class AddState implements Action {
    readonly type = ADD_STATE;

    constructor(public payload: State) { }
}

export class RemoveState implements Action {
    readonly type = REMOVE_STATE;

    constructor(public payload: number) { }
}

export type Actions = AddState | RemoveState;