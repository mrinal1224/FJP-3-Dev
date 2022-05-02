import React, { Component } from "react";

export class Favourites extends Component {
  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col-3">
            <ul className="list-group genre-selector">
              <li class="list-group-item">Favourites</li>
              <li class="list-group-item">Action</li>
              <li class="list-group-item">Action</li>
              <li class="list-group-item">Action</li>
              <li class="list-group-item">Action</li>
              
            </ul>
          </div>
             <div className="col-9 favourites-table">
                    <div className="row">
                    <input type='text' className="input-group-text col"/>
                    <input type='number' className="input-group-text col"/>
                    </div>
                
             </div>

        </div>
      </div>
    );
  }
}

export default Favourites;
