import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NewsItem, { NewsItemProps } from '../NewsItem';
import { GetServerSideProps } from 'next';

interface ApiResponse {
    data: NewsItemProps[];

  }

interface NewsListProps {
 
}


const NewsList = ({topic}: {topic:string}) => {

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
                    keywords={data.keywords}
                    />  
                )
            })}
        </div>
    );
    
};

export const getServerSideProps: GetServerSideProps= async (context) => {
    const topic = context.query.topic as string;
    const response = await axios.get <ApiResponse> 
    (`https://api.thenewsapi.com/v1/news/all?api_token=hwJ3NKA9anopq5y46RFb97nGErEr3zysTN5aV4va&search=${topic}`);
    const apiResponse: ApiResponse = response.data
    return (
       topic: {
            ApiResponse : data
        }
        
    )
}

export default NewsList;



