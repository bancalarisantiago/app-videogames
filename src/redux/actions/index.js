import axios from 'axios'

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'
export const GET_VIDEOGAME = 'GET_VIDEOGAME';
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID'
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const GET_MY_GAMES = 'GET_MY_GAMES'
export const SORT_BY = 'SORT_BY';
export const GENRES_FILTER = 'GENRES_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const CLEAR_VIDEOGAME_ID = 'CLEAR_VIDEOGAME_ID'


export const getAllVideogames = () => dispatch => {

    return fetch('http://localhost:3001/videogames')
            .then(response => response.json())
            .then(json => 
                dispatch({type: GET_ALL_VIDEOGAMES, payload: json}));
};

export const getVideogameByName = (name) => (dispatch) => {
    return fetch(`http://localhost:3001/videogames?name=${name}`)
            .then(response => response.json())
            .then(json =>
                dispatch({type: GET_VIDEOGAME, payload: json}))

}

// export const getVideogameById = (id) => dispatch => {

//     return fetch(`http://localhost:3001/videogames/${id}`)
//             .then(response => response.json())
//             .then(json =>
//                 dispatch({type: GET_VIDEOGAME_BY_ID, payload: json}))

// }

export const getVideogameById = (id) => async dispatch => {

    try {
        let promise = await fetch(`http://localhost:3001/videogames/${id}`)
               let json = await promise.json()

                 return dispatch({type: GET_VIDEOGAME_BY_ID, payload: json})
    
            } catch(error) {
                return console.log(error)
            }
}

export const getGenres = () => dispatch => {
    return fetch(`http://localhost:3001/genres`)
            .then(response => response.json())
            .then(json =>
                dispatch({type: GET_GENRES, payload: json}))

}


export const getPlatforms = () => dispatch => {
    return fetch(`http://localhost:3001/platforms`)
            .then(response => response.json())
            .then(json =>
                dispatch({type: GET_PLATFORMS, payload: json}))

}

export const createVideogame = (payload)  => async (dispatch) => {

        dispatch({type: CREATE_VIDEOGAME, payload })   
    return await axios.post('http://localhost:3001/videogames', payload)
    
    }

export const genresFilter = (payload) => {
    return {type: GENRES_FILTER, payload
    }
}

export const sortBy = (order,payload) => {
    
        if(order === "nameAsc" ) { 
        let sorted = [...payload.sort((a,b) => 
                    a.name.localeCompare(b.name)
                 )]
            return {type: SORT_BY, payload : sorted }
        }
        if(order === "nameDesc" ) { 
            let sorted = [...payload.sort((a,b) => 
                        b.name.localeCompare(a.name)
                     )]
                return {type: SORT_BY, payload : sorted }
            }
        if(order === "ratAsd" ) {
            
            let sorted = [...payload.sort((a,b) =>  a.rating > b.rating ? -1 : 1
              )]
                return {type: SORT_BY, payload : sorted }
            }
        if(order === "ratDesc" ) { 
            let sorted = [...payload.sort((a,b) =>  a.rating < b.rating ? -1 : 1
              )]
                return {type: SORT_BY, payload : sorted }
            }
}

export const getMyGames = () => async dispatch => {

    let myGames = await axios.get('http://localhost:3001/videogames/mygames')
   
    return dispatch({type: GET_MY_GAMES , payload : myGames})

}


export const clearFilter = () => {
    return {type: CLEAR_FILTER }
}
export const clearVgId = () => {
    return {type: CLEAR_VIDEOGAME_ID}
}

