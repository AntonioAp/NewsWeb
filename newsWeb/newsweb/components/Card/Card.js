import React    from "react";
import template from "./Card.jsx";

class Card extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Card;
