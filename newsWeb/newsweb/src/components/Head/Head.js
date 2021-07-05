import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Head.scss";

export default class Head extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <h3 className="news-head">
          Tu web de noticias
          </h3>
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL8ZLJ2-1T-aXf_ZUQ6-FPrXPzu7kXzBw1ZZzGhou8bjLFK0qLUiL0bmHc0T6npIoFPbI&usqp=CAU"
              alt="Yahoo News"
            />
            
          <Nav />
        </div>
      </header>
    );
  }
}
