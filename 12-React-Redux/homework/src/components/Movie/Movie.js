import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { getMovieDetail, cleanDetail } from '../../actions/index';

import './Movie.css';

// const Movie = (props) => {
//     const movieId = props.match.params.id;
//     const dispatch = useDispatch();
//     const movieDetail = useSelector((state) => state.movieDetail);

//     useEffect(() => {
//         dispatch(getMovieDetail(movieId));

//         return function () {
//             dispatch(cleanDetail());
//         };
//     }, [dispatch, movieId]);

//     return (
//         <div className="movie-detail"> 
//             <h4>{movieDetail.Title}</h4>
//             <p>{movieDetail.Year}</p>
//             <img src={movieDetail.Poster} alt='icon'></img>
//             <p>{movieDetail.Plot}</p>
//         </div>
//     )
// }

// export default Movie;


class Movie extends React.Component {

    
    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id);
    }
    
    render() {
        return (
            <div className="movie-detail">
                <h4>{this.props.movieDetail.Title}</h4>  
                <p>{this.props.movieDetail.Year}</p>  
                <img src={this.props.movieDetail.Poster} alt='img not found'></img>
                <p>{this.props.movieDetail.Plot}</p>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        movieDetail: state.movieDetail,
    };
};

const mapDispatchToProps= (dispatch) => {
    return {
        getMovieDetail: (movieId) => {
            dispatch(getMovieDetail(movieId))
        },
    };    
};


export default connect(mapStateToProps, mapDispatchToProps)(Movie);