import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
       <div className="card" >
       <img src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422" className="card-img-top" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" className="btn btn-primary">Go somewhere</a>
       </div>
     </div>
    )
  }
}

export default Banner