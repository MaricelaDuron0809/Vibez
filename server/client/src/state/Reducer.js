export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null
}

const Reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state, 
                user: action.user
            }
        default: 
            return state;
    }
}

export default Reducer;