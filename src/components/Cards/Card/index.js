import React from 'react';
import './style.css';


class Card extends React.Component {

  errorImg(e){
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Achtung.svg/1200px-Achtung.svg.png"
  }
  render() {
    const {img, title,description} = this.props.startup
    return (
      <div className="Card">
        <img className="ImageCard" onError={this.errorImg} src={img}></img>
        <div className="InfoCard">
          <span className="Title">{title}</span>
          <span className="Description">{description}</span>
        </div>
      </div>
    );
  }
}

export default Card;
