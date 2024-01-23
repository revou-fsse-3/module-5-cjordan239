// import API_URL_BUSINESS from '../../api/getBusiness'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { Card } from "@/Component";
import styles from './style-sports.module.css'
// import {useQuery } from 'react-query';
// import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import Layout from "@/Layout";

interface Entertainment {
    // map(arg0: (article: any) => import("react").JSX.Element): import("react").ReactNode;
    children: ReactNode;
    articles: any;
    url: string;
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
    
}
interface EntertainmentProps {
    children: ReactNode;
    articles : Entertainment;
}

export const getServerSideProps  =  ( async () => {
    const fetch = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=178ef24ed1294ed588b9c880c091f85a')
    // const fetch = await axios.get('API_URL_BUSINESS')
    const data: Entertainment = fetch.data
    console.log(data);
    
    return {
        props: {
            articles: data
        }
    }
})

const Entertainment = ({articles} : Entertainment) => {

    return ( 
        
        <Layout>
            {articles?.articles?.map((article: { id: Key | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; urlToImage: string | undefined; url: string | undefined;}) => (
                <div className={styles['news-app']}>
                    <div className = {styles['news-item']}>
                        {/* <h3>{categories}</h3> */}
                        <img className={styles['news-img']} src={article.urlToImage} />
                        <h4>Author: {article.author}</h4>
                        <h3><a href={article.url}>{article.title}</a></h3> 
                        <p>{article.description} <span className={styles['seemore-link']}><a href={article.url}> <br /> See More.. </a></span></p>
                    </div>
                </div>
            
            ))}
        </Layout>
        

    )
};


export default Entertainment;