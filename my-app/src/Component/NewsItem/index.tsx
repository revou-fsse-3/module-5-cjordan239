import React from 'react';
import styles from './styles/style-newsitem.module.css'

export interface NewsItemProps {
    categories: string;
    title: string;
    description:string;
    url:string;
    image_url:string;
    author:string
}



const NewsItem: React.FC<NewsItemProps> = ({categories, title, description, url, image_url, author}) => {
    return (
        <div className={styles['news-app']}>
            <div className = {styles['news-item']}>
                <h3>{categories}</h3>
                <img className={styles['news-img']} src={image_url} alt={image_url} />
                <h4>Author: {author}</h4>
                <h3><a href={url}>{title}</a></h3> 
                <p>{description} <span className={styles['seemore-link']}><a href={url}> <br /> See More.. </a></span></p>

            </div>
        </div>
    );
};

export default NewsItem;