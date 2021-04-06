import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";
import { ShoppingItem } from "../../models/shopping-item.model";

const initialState: Array<ShoppingItem> = [
    {
        id: "bacfefa1-c267-4d22-8604-2a12d3845a3b",
        name: 'Coke'
    },
    {
        id: "22eab8bc-f62c-416e-965c-4d38cd6ccf69",
        name: 'Diet Coke'
    }
];

export function ShoppingReducer(
    state: Array<ShoppingItem> = initialState,
    action: ShoppingAction) {

    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            console.log(action.type, action.payload);
            return [...state, action.payload];
        case ShoppingActionTypes.DELETE_ITEM:
            console.log(action.type, action.payload);
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}