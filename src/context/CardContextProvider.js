import React, { useReducer } from 'react';

const initialState = {
    selectedItem: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}

const sumItem = (items) => {
    const itemCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCounter, total }
}

const cardReduce = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItem.find(item => item.id === action.payload.id)) {
                state.selectedItem.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItem: [...state.selectedItem],
                ...sumItem(state.selectedItem),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItem: [...newSelectedItem],
                ...sumItem(newSelectedItem)
            }
        case "INCREASE":
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexI].quantity++;
            return {
                ...state,
                ...sumItem(state.selectedItem)
            }
        case "DECREASE":
            const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexD].quantity--;
            return {
                ...state,
                ...sumItem(state.selectedItem)
            }
        case "CHECKOUT":
            return {
                selectedItem: [],
                itemCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItem: [],
                itemCounter: 0,
                total: 0,
                checkout: false
            }
        default:
            return {
                ...state
            }
    }
}

export const cardContext = React.createContext();


const CardContextProvider = ({ children }) => {

    const [state, dispath] = useReducer(cardReduce, initialState);

    return (
        <cardContext.Provider value={{ state, dispath }}>
            {children}
        </cardContext.Provider>
    )
}

export default CardContextProvider
