import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsItem, { NewsItemProps } from '../NewsItem';
import { GetServerSideProps } from 'next';

interface ApiResponse {
    data: NewsItemProps[];

  }

interface NewsListProps {
    topic: string
    articles?: NewsItemProps[]
}


const NewsList: React.FC<NewsListProps> = ({articles}) => {

    return (
        <div>
            {articles?.map(data => {
                return (
                    <NewsItem
                    categories={data.categories}
                    title={data.title}
                    description={data.description}
                    url={data.url}
                    image_url={data.image_url} 
                    author={data.author} 
                    />  
                )
            })}
        </div>
    );
    
};

// export const getServerSideProps: GetServerSideProps= async (context) => {
//     const topic = context.query.topic as string;

//     try {
//         const response = await axios.get(`https://api.thenewsapi.com/v1/news/all?api_token=hwJ3NKA9anopq5y46RFb97nGErEr3zysTN5aV4va&search=${topic}`);
//         const data: ApiResponse = response.data
//         console.log('Api response :', data)
//         return {
//             props: {
//                 articles: data
//                 },    
//             };
//     } catch (error) {
//         console.error('error fetching data', error)
    
//         return {
//             props: {
//                 articles: []
//             }
//         }
//     }

// }

export const getServerSideProps: GetServerSideProps  =  ( async () => {
    const fetch = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=hwJ3NKA9anopq5y46RFb97nGErEr3zysTN5aV4va&search=${topic}')
    // const fetch = await axios.get('API_URL_BUSINESS')
    const data: ApiResponse = fetch.data
    console.log('ApiResponse:', data)
    return {
        props: {
            articles: data
        }
    }
})


export default NewsList;



