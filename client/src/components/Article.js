import styled from "@emotion/styled";
import {Card, CardContent, Grid, Typography } from "@mui/material"

const Image = styled('img')({
    height: 268,
    minWidth: 228,
    width: '100%',
    borderRadius: 4,
});

const CardBox = styled(Card)`
    border-radius: 3px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);
    margin-bottom: 20px;
`;

const CardContainer = styled(CardContent)`
    padding: 8px !important;
`;

const Heading = styled(Typography)`
    color: #44444d;
    cursor: pointer;
    font-size: 22px;
    font-weight:300;
`;
const Tag = styled(Typography)`
    color: #808290;
    font-size: 12px;
    font-weight: 300;
    line-height: 22px;
`;

const Paragraph =  styled(Typography)`
    color: #44444d;
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
    margin-top: 8px;
`;

const Article = ({data}) => {
    const {hash_id, title, author_name, content, image_url, created_at} = data;
    let create = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'short',day: '2-digit'}).format(created_at);
    return (
        <CardBox key={hash_id}>
            <CardContainer>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={5} lg={5} item>
                        <Image src={image_url} alt={image_url} />
                    </Grid>
                    <Grid xs={12} sm={7} lg={7} item>
                        <Heading>{title}</Heading>
                        <Tag><strong style={{color: '#000000'}}>short</strong> by {author_name} / {create}</Tag>
                        <Paragraph>{content}</Paragraph>
                    </Grid>
                </Grid>
            </CardContainer>                
        </CardBox>
    )
}

export default Article