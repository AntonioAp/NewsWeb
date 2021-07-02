import React    from "react";
import template from "./Form.jsx";

class Form extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Form;
