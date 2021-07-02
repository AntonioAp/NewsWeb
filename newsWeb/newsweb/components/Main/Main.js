import React    from "react";
import template from "./Main.jsx";

class Main extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Main;
