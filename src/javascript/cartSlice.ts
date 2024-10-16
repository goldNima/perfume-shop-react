import { createSlice , PayloadAction } from "@reduxjs/toolkit";

export interface ProductStore {
    id : number;
    name : string;
    info : string;
    img : string;
    price : number; 
}

interface CartState {
    items : ProductStore[];
    totalPrice : number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state , action : PayloadAction<ProductStore>){
            state.items.push(action.payload);
        state.totalPrice += action.payload.price;
        },
        deleteFromCart(state , action: PayloadAction<number>){
            const itemToRemove = state.items.find(item => item.id === action.payload);

            if (itemToRemove){
                state.totalPrice -= itemToRemove.price;

                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        clearCart : (state)=>{
            state.items = [];
            state.totalPrice = 0;
        }
    },
});

export const {addToCart , deleteFromCart , clearCart} = cartSlice.actions;
export default cartSlice.reducer;