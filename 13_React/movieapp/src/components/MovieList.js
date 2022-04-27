import React, { Component } from "react";

import { movies } from "../movieData";

export class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      hover: "",
    };
  }
  render() {
    let moviesArr = movies.results;

    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>

        <div className="movies-list">
          {moviesArr.map((movieElem) => (
            <div
              className="card movie-card"
              onMouseEnter={() => this.setState({ hover: movieElem.id })}
              onMouseLeave={() => this.setState({ hover: "" })}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
                style={{ height: "40vh", width: "20vw" }}
                className="card-img-top movie-img"
                alt="..."
              />

              <h5 className="card-title movie-title">{movieElem.title}</h5>

              <div
                className="button-wrapper"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {this.state.hover == movieElem.id && (
                  <a
                    href="#"
                    className="btn btn-primary movies-button text-center"
                  >
                    Add to Favourites
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default MovieList;
