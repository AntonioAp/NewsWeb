import React from 'react';
import './NoticiaCard.scss'

const NoticiaCard= (title,author,content) => {
    return (
        <div className='card'>
            <p>{title}</p>
            <p>{author}</p>
            <p>{content}</p>     
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