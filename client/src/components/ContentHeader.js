import { Box, Typography, styled } from '@mui/material'

const Container = styled(Box)(({theme})=>({
    width: '100%',
    maxWidth: '900px',    
    margin:'auto',
    [theme.breakpoints.down('md')] : {
        display: 'none' 
    }
}));
const Wrapper = styled(Box)`
    align-items: center;
    background: #f44336;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);
    display: flex;
    height: 40px;
    justify-content: space-between;
    margin-bottom: 32px;
    margin-top:40px;
    padding:8px 32px;
`;
const AppStore = styled('img')({
    height: 38,
    marginTop: 5,
    marginLeft:8,
    marginRight:8,
}); 
const PlayStore = styled('img')({
    height: 38,
    marginTop: 5,
    marginLeft:8,
    marginRight:8,
}); 
const Text = styled(Typography)`
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;
`;

const ContentHeader = () => {
  return (
    <Container>
        <Wrapper>
            <Text>
                For the best experience use  Inshorts  app on your smartphone
            </Text>
            <Box>
                <AppStore src='/appstore.png' alt='appstore' />
                <PlayStore src='/playstore.png' alt='playstore' />
            </Box>
        </Wrapper>
    </Container>
  )
}

export default ContentHeader