import React from 'react';
import './NoticiaCard.scss'

const NoticiaCard= ({article }) => {
    return (
        <div className='card'>
            <p className="titulo">{article.title}</p>
            <p className="autor">{article.author}</p>
            <p>{article.content}</p> 
            <img className="foto" src={article.urlToImage} alt=""/>
        </div>
    )
}

   

export default NoticiaCard














/*  import React from 'react';
import './NoticiaCard.scss';


const NoticiaCard = ({title,author,content}) => {
    return (
    <div className="newsCard">
        <p>{title}</p>
        <p>{author}</p>
        <p>{content}</p>

    </div>
 
    )
}




export default NoticiaCard;  */