import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

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