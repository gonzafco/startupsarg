import React from "react";
import "./style.css";
import Card from "./Card";
import { Link } from "react-router-dom";

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
                <Link
                  to={"/StartUp/" + startup.title.toLowerCase()}                 
                >
                  <Card startup={startup} />
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Cards;
