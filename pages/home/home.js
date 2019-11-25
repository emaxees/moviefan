import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from 'core/store/thunks';
import { Hero, Card } from 'components';
import PropTypes from 'prop-types';

const Home = ({ movies, fetchMovie }) => {
    useEffect(() => {
        const movieName = 'adventure';
        const resource = `?s=${movieName}&apiKey=`;
        fetchMovie(resource);
    }, []);

    const renderMovies = movies.map((movie) => (
        <Card
            name={movie.Title}
            year={movie.Year}
            image={movie.Poster}
            genres={movie.Type}
            valoration="5.0"
            key={movie.imdbID}
        />
    ));

    return (
        <div>
            <Hero />
            <div className="container global-padding">
                {renderMovies}
            </div>
            <style jsx>
                {`
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: var(--global-color-grey-light);
  }
      `}
            </style>
        </div>
    );
};

Home.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    fetchMovie: PropTypes.func.isRequired,
};

export default connect(
    (state) => ({
        movies: state.movies.movies,
    }),
    (dispatch) => bindActionCreators({
        fetchMovie,
    }, dispatch),
)(Home);
