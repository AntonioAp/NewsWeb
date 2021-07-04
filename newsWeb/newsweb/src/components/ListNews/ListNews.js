
//import NoticiaCard from './NoticiaCard/NoticiaCard';
import React, { Component } from 'react';
import './ListNews.scss';
import axios from 'axios';



class ListNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    };
   }

   componentDidMount() {

    setTimeout(() => { 
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&apiKey=c943630bf7ff4e3e812a9874864f71cc`)
      .then(res => {
        const articles = res.data;
        console.log(res)
        console.log(articles)
        this.setState({ articles });
      }) 
    }, 3000);
  }

paintCards = () => 

  this.state.articles.map(article => {
    return (

      <li>
        {article.title},
        {article.author},
        {article.content}
      </li>)
    /*{ <NoticiaCard 
      article={article} key={index}/>) }*/
    })
  
 


  render() {
    return (
      <div className="listnews">
        {this.paintCards()}
      </div>
      
    );
  }
}
export default ListNews; 
