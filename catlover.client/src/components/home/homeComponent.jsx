import React, { Component } from "react";

class HomeComponent extends Component {
  state = {};
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        <div className="col">
          <div className="card">
            <a href="/cats" className="stretched-link"></a>
            <div className="card-header">
              <h5 className="card-title">Cats List</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Go to your all cats photos.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/breeds" className="stretched-link"></a>
            <div className="card-header">
              <h5 className="card-title">Breeds List</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Go to the cat breeds.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/favorites" className="stretched-link"></a>
            <div className="card-header">
              <h5 className="card-title">Cats Favorite List</h5>
            </div>
            <div className="card-body">
              <p className="card-text">Go to your favorite cats.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
