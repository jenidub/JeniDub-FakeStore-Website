import { createSlice } from "@reduxjs/toolkit";


interface ProductCartState {
    productCart: Product[];
    setProductCart: (products: Product[]) => void;
}

const initialState: ProductCartContext = {
    productCart: [],
    setProductCart: () => {},
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state) => {
            if(state) {
                setProductCart([...productCart, state]);
            }
        },

    },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;

// addToCart - adds a product to cart or increases quantity if it already exists
// removeFromCart - removes a product completely from cart
// updateQuantity - updates the quantity of a specific item
// clearCart - empties the entire cart