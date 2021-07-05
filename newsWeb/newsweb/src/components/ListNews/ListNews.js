import NoticiaCard from "./NoticiaCard/NoticiaCard";
import React, { Component } from "react";
import "./ListNews.scss";
import axios from "axios";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      title: "",
      author: "",
      content: "",
      urlToImage: "",
      visible: false,
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`
        //`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&apiKey=c943630bf7ff4e3e812a9874864f71cc`
      )
      .then((res) => {
        const{articles} = res.data;
        console.log(articles)
        this.setState({articles:[...this.state.articles, ...articles]});
      });
  }

  paintCards = () => {
      return this.state.articles.map((article, index) => <NoticiaCard article={article} key={index} />)
  };

  render() {
    return <div className="listnews">
      {
        this.state.articles.length > 0 ? this.paintCards():<></>
      }
      </div>;
  }
}
export default ListNews;
