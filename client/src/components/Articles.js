import { Box } from '@mui/material';
import Article from "./Article";
import styled from '@emotion/styled';
import { getFeeds } from '../service/api';
import { useEffect, useState } from 'react';

const Container = styled(Box)`
    max-width: 900px;
    margin:auto;
    width:100%;
`;

const Articles = () => {
  const [news, setNews ] = useState([]);
  useEffect(()=>{
    getNews();
  },[]);
  const getNews = async () => {
    let response = await getFeeds();
    setNews(response.data)
  }
  return (
    <Container>
        {
            news.map((data)=>{
              return <Article data={data} key={data.hash_id}/>
            })     
        }
    </Container>
  )
}

export default Articles