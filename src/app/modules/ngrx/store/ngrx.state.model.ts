import { ShoppingItem } from '../models/shopping-item.model';
import { State } from '../models/state.model';

export interface AppState {
    readonly state: State[];
    readonly shopping: Array<ShoppingItem>;
}