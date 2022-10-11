import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, CLEAN_DETAIL } from '../actions/index.js';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    if (action.type === GET_MOVIES) {
        return {
            ...state,
            moviesLoaded: action.payload.Search
        };
    }
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: [...state.moviesFavourites, action.payload]
        }
    }
    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter((pelicula) => pelicula.id !== action.payload)
        }
    }
    if (action.type === GET_MOVIE_DETAIL) {
        return {
          ...state,
          movieDetail:action.payload          
        }
    }
    if (action.type === CLEAN_DETAIL) {
        return {
          ...state,
          movieDetail: {}          
        }
    }
    return { ...state };
    // switch(action.type) {
    //     case GET_MOVIES:
    //         return {
    //                     ...state,
    //                     moviesLoaded: action.payload.Search
    //                 };
    //     case ADD_MOVIE_FAVORITE:
    //         return {
    //                   ...state,
    //                   moviesFavourites: [...state.moviesFavourites, action.payload]
    //                 }   
    //     case REMOVE_MOVIE_FAVORITE:
    //         return {
    //                   ...state,
    //                   moviesFavourites: state.moviesFavourites.filter((pelicula) => pelicula.id !== action.payload)
    //                 }
    //     case GET_MOVIE_DETAIL:
    //         return {
    //                   ...state,
    //                   movieDetail:action.payload          
    //                 }                      
    //     default:
    //         return {...state};
    // }
  }
  
  export default rootReducer;

