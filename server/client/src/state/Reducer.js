export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    items: null,
    // token: "BQB-xRo5yYj1DKywerYwHqsCvgxrZ78daf3s8HMudd2vp_pt4w…TUw0ethv3YfiuKDUWte5aLYovO7XWn25r8F6xKxwR2BYnEdIA"
    
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state, 
                user: action.user
            };
        case "SET_ITEM":
            return {
              ...state,
              item: action.item,
            };
              
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
                };
        case "SET_PLAYLISTS":
            return {
              ...state,
              playlists: action.playlists
            };        
        default: 
            return state;
    }
}

export default reducer;