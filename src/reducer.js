export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null, 
    token: "BQDsu_KdaPCniRtYxadnjFckAF5uGIhrSj6Ub5it4xMvXxEEbsY3kAN2dmnjRdk9tfJckcSAmc7fWHN7Je8u8ln0yPvwzKR5ZO21Dgo5e2iVtYgtQ9UaslMd8BBmk_fvQ0Navaw5xuUjRlvrL2MsEGXCj2QmVkxkdIt8GOWfHEjCcr85vk6C11fKu4zcGvwRvd5YNJly9qifL-Ti",
}

const reducer = (state, action) => {
    console.log(action);

    //action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user || null,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}


export default reducer;