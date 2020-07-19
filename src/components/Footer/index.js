import React from 'react';
import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <span className="Creator">Made with ♥ by <a href>{this.props.creator}</a></span>        
      </div>
    );
  }
}

export default Footer;
