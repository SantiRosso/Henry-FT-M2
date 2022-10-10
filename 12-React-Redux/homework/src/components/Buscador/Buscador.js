import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies } from "../../actions";
import { addMovieFavorite } from "../../actions";



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }
  handleClick(movie) {
    this.props.addMovieFavorite(movie)
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {
          this.props.movies.map((movie) => {
              return(
                <li>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <span>{movie.Title}</span>
                  </Link>
                  <button onClick={()=>this.handleClick({id: movie.imdbID, Title: movie.Title})}>FAV</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => { 
      dispatch(addMovieFavorite(movie));
    },
    getMovies: (title) => {
      dispatch(getMovies(title)); 
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
