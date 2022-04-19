import * as actions from '../actions/index';

const initialState = {
    videogames: [],
    videogamesCopy:[],
    genres: [],
    genresFilter: [],
    videogamesCreated: [],
    platforms: [],
    platformsComplete: [],
    videogameId: [],
    videogame: { name: '', 
                description: '', 
                releaseDate: '', 
                rating: 0, 
                platforms: [], 
                genres : []
            },
};

const rootReducer = (state = initialState, {type,payload}) => {

    switch(type) {
        case actions.GET_ALL_VIDEOGAMES: 

       // let allGames = [...payload, ...state.videogamesCreated]
        return {
            ...state, videogames: payload , videogamesCopy: payload
        };
        case actions.CREATE_VIDEOGAME:
            let created = [...state.videogamesCreated]
           //let vg = [...state.videogames]
               
        return {
            ...state, videogames: state.videogames , videogame : payload , videogamesCreated: [...created, payload]
        };
        case actions.GET_GENRES: 
        return {
            ...state, genres: payload,
        };
        case actions.GET_MY_GAMES:
        return {
            ...state, videogamesCopy : payload.data.length ? payload.data : ['Not Found']  , videogamesCreated: payload.data
        }
        case actions.GET_PLATFORMS: 
            let arrayPlat = payload;
               function arr (array) {
                   let arr = [];
                   for(const namePlat of array) {
                       arr.push(namePlat.name);
                   }
                   return arr;
               }

        return {
            ...state, platformsComplete: arrayPlat ,  platforms : arr(payload)
        };
        case actions.GET_VIDEOGAME: 
           
           
        return {
            ...state, videogamesCopy: payload.length ? payload : ['Not Found'] 
        };
        case actions.GET_VIDEOGAME_BY_ID: 
        return {
            ...state, videogameId: payload
        };

        case actions.SORT_BY:
            return {
                ...state, videogamesCopy: payload
            }
       
        case actions.GENRES_FILTER:
               
                function filtering (filters,vg) {
                    const fillArr = []; 
                    
                    for(let i = 0; i < vg.length; i++) {
                        const gameGenres = vg[i].genres.map(e => e.name)
                        const intersection = gameGenres.filter( e => filters.includes(e))
                        if(intersection.length === filters.length) {
                            fillArr.push(vg[i])
                        }  
                    }
                    
                    return fillArr 
                 }
                    let result = filtering(payload,[...state.videogames]); 
                return {
                    ...state,  genresFilter : payload, videogamesCopy:  result
                }
        case actions.CLEAR_FILTER:

                return {
                    ...state, videogamesCopy: state.videogames , genresFilter: []
                }
        case actions.CLEAR_VIDEOGAME_ID: 
        return {
            ...state, videogameId : []
        }
        default:
            return state
    }

}





export default rootReducer