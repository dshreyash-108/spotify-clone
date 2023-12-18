export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finished developing
    token: "BQBWyenGGxRwZG8NkFWiIW0wT7A9z8Bj9ziI5v2bwFKbZwATBVaoGVJ7bLN-tAVFvMHRgbrJSccV7e_oyr4ZDafWfO3vYEGzBo3jVgyX2VWY7n5zPHo6DV7RloJQW8g-1Dj24IKJ1FhLp5nyyrIWzV5YWKtgOk1V6AAiadfX4BlH16DY5cLWGd6haXSOqyRnM2mApwuzPVVRahbAP46z",
};

const reducer = (state, action) => {
    console.log(action);

    //action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user || null,
            };
        case "SET_TOKEN":
            return {
               ...state,
               token: action.token, 
            }
        default:
            return state;
    }
}


export default reducer;