import React from "react";
import "./style.css";

class StartUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
      description: "",
    };
  }

  setStartUp(searchStartUp) {
    let items = localStorage.getItem("lista");
    items = JSON.parse(items);
    let { img, description, title } = items.find((startup) =>
      startup.title.toLowerCase().includes(searchStartUp)
    );

    this.setState({
      img: img,
      name: title,
      description: description,
    });
  }

  componentDidMount() {
    const { searchStartUp } = this.props;
    this.setStartUp(searchStartUp);
  }

  errorImg(e){
    e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Achtung.svg/1200px-Achtung.svg.png"
  }
  render() {
    const { img, description, name } = this.state;

    return (
      <>
        <div className="startUpWrapper">
          <div className="headerDecoration"></div>
          <div className="startUpHeader">
            <img
              onError={this.errorImg}
              src={img}
              className="startUpProfile"
            ></img>
            <h1 className="startUpTitle">{name}</h1>
          </div>
          <div className="startUpInformation">
            <span className="startUpDescription">Descripción</span>
            <p className="startUpText">{description}</p>
          </div>
        </div>
      </>
    );
  }
}

export default StartUp;
