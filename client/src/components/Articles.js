import { Box } from '@mui/material';
import Article from "./Article";
import { FEEDS } from '../constants';
import styled from '@emotion/styled';

const Container = styled(Box)`
    max-width: 900px;
    margin:auto;
    width:100%;
`;

const Articles = () => {
  return (
    <Container>
        {
            FEEDS.map((data)=>{
              return <Article data={data} key={data.hash_id}/>
            })     
        }
    </Container>
  )
}

export default Articles