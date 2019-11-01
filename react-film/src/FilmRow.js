import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

  handleDetailsClick = (film) => {
    console.log(film)
  }

  render() {

    let {title,date,posterUrl} = this.props;
    var year = new Date(date);
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props)} >
        <FilmPoster posterUrl={posterUrl} />

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{ year.getFullYear()}</p>
        </div>
        <Fave />

      </div> 
    );
  }
}

export default FilmRow;

