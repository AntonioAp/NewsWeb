import React, { Component } from "react";
import "./List.scss";
import ListNews from "../../components/ListNews";
/* import NoticiaCard from '../../components/ListNews/NoticiaCard/NoticiaCard'; */

class Form extends Component {


  render() {
    return <div className='Form'>
      aquí va las lista de 5 noticias de la api + las que se añadan
    
    <ListNews/>
    </div>
  }
}

export default Form;
