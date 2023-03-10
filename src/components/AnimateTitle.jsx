import React from "react";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";

class AnimateTitle extends React.Component {
  state = { animation: "zoom" };

  handleAnimation = animation => {
    this.setState({ animation });
  };

  getText = () => {
    return (
      <div
        style={{
          marginTop: "0%",
          fontSize: "8em",
          fontFamily: "'Dancing Script', cursive",
          color: "#178ca4",
          fontWeight: "bold"
        }}
      >
       Bienvenidos en Asturias
      </div>
    );
  };

  render() {
    let comp;
    switch (this.state.animation) {
      case "flip":
        comp = <Flip>{this.getText()}</Flip>;
        break;
      case "zoom":
        comp = <Zoom>{this.getText()}</Zoom>;
        break;
      case "bounce":
        comp = <Bounce>{this.getText()}</Bounce>;
        break;
      case "roll":
        comp = <Roll>{this.getText()}</Roll>;
        break;
      default:
        comp = <Zoom>{this.getText()}</Zoom>;
    }

    return (
      <div>
        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px"
          }}
        >
          window.onLoad ={() => this.handleAnimation("flip")}
         {/**<button onClick={() => this.handleAnimation("zoom")}>Zoom</button> */} 
         {/**<button onClick={() => this.handleAnimation("bounce")}>Bounce</button>*/} 
          {/**<button onClick={() => this.handleAnimation("roll")}>Roll</button> */}
        </div>

        {comp}
      </div>
    );
  }
}

export default AnimateTitle;