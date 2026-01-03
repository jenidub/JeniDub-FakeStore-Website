import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    quantity?: number,
};

export interface ShoppingCartState {
    items: Product[];
}

const initialState: ShoppingCartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCart: (state: ShoppingCartState, action: PayloadAction<Product>) => {
            const { id, title, price, description, category, image, quantity } = action.payload;

            state.items.push({
                id: id,
                title: title,
                price: price,
                description: description,
                category: category,
                image: image,
                quantity: quantity,
            })
        },
        removeFromCart: (state: ShoppingCartState, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(product => product.id === action.payload);
            if (itemIndex > -1) {
                const updatedCart = [...state.items];
                updatedCart.splice(itemIndex, 1);
                console.log("updatedCart: ", updatedCart);
                state.items = updatedCart;
            }
        },
        checkout: (state: ShoppingCartState)  => {
            state.items = [];
        }
    },
});

export const { addToCart, removeFromCart, checkout } = cartSlice.actions;
export default cartSlice.reducer;

// addToCart - adds a product to cart or increases quantity if it already exists
// removeFromCart - removes a product completely from cart
// updateQuantity - updates the quantity of a specific item
// clearCart - empties the entire cart
