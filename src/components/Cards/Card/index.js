import React from 'react';
import './style.css';


class Card extends React.Component {
  render() {

    const {img, title,description} = this.props.startup
    return (
      <div className="Card">
        <img className="ImageCard" src={img}></img>
        <div className="InfoCard">
          <span className="Title">{title}</span>
          <span className="Description">{description}</span>
        </div>
      </div>
    );
  }
}

export default Card;
