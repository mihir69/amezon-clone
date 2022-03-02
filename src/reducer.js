export const initialState = {
    basket: [],
    user:null,
}
const help = (accumulator, cnt) => accumulator + cnt.price
export const Total_payment = (basket) => basket?.reduce(help, 0);


export const reducer = (state = initialState, action) => {
    console.log(state + " ==>" + action.item);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return (
                {
                    ...state,
                    basket: [...state.basket, action.item],
                }
            )
        case'SET_USER': 
            return { ...state,
                    user: action.user}
               
            
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `cant remove product (id : ${action.id}) if not in basket`
                )
            }
            return ({
                ...state,
                basket: newBasket
            })
        default:
            return ({
                ...state,
            })

    }
}