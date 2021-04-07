export interface ShoppingItem {
    id: string;
    name: string;
}

export interface ShoppingState {
    list: ShoppingItem[],
    loading: boolean,
    error: Error
}