import React    from "react";
import template from "./ListNews.jsx";

class ListNews extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ListNews;
