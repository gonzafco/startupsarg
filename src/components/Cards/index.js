import React from "react";
import "./style.css";
import Card from "./Card";

class Cards extends React.Component {
  
  render() {
    const startups = this.props.cards;
    const { filter } = this.props;
    return (
      <div className="CardWrapper">
        {startups.map((startup, key) => {
          return (
            <React.Fragment>
              {startup.title.toLowerCase().includes(filter.toLowerCase()) && (
                <Card startup={startup} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Cards;
