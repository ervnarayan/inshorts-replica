import { Box, Grid, Link, Typography, styled } from '@mui/material'
import React from 'react'

const Logo = styled('img')({
  height: 45,
  marginBottom: '15px'

});

const Icon = styled('img')({
  height: 45,
  marginBottom: '15px'
});

const FooterWrap = styled(Box)`
  background-color: #323232;
  padding-bottom: 20px;
  padding-top: 20px;

`;

const FooterContainer = styled(Box)(({theme})=>({
  width:'100%',
  maxWidth:'900px',
  margin:'auto',
  display:'flex',
  justifyContent:'space-between',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    justifyContent: 'center'
  }
}))

const Copy = styled(Typography)`
  color: #808290;
  font-size: 14px;
  line-height: 18px;
`;

const Image = styled('img')({
  height: '28px',
  width: '28px'
})

const Anchor = styled(Link)`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px; 
  display:block;
`;

const Left = styled(Grid)(({theme})=>({
  borderRight:'1px solid #808290',
  paddingRight:'10px',
  textAlign: 'right',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    borderRight: 'none'
  } 
}))

const Middle = styled(Grid)(({theme})=>({
  paddingLeft: '20px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    paddingLeft: '0',
    marginTop:'30px'
  } 
}))

const Right = styled(Grid)(({theme})=>({
  display: 'flex',
  justifyContent: 'right', 
  alignItems: 'flex-end',  
  width:'100%',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-center',
    justifyContent:'center', 
    marginTop:'30px'
  }

}))

const SocialLink = styled(Link)(({theme})=>({
  marginLeft:'20px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '5px',
    marginRight: '5px',
    marginTop:'30px'
  }
}))

const Footer = () => {
  return (
    <FooterWrap  spacing={8}>
      <FooterContainer >
        <Left xs={12} md={2} lg={2} item>
          <Logo src='/logo_footer.png' alt='Logo'/>
          <Copy>
              <strong>Inshorts</strong>  Pte. Ltd. <br/> ©COPYRIGHT 2023  
          </Copy>
        </Left>
        <Middle xs={12} md={2} lg={2} item>
          <Icon src='/contact_icon.png' alt='Contact'/>
          <Anchor href="#">Terms & conditions</Anchor>
          <Anchor href="#">Privacy Policies</Anchor>
        </Middle>
        <Right xs={12} md={8} lg={8} item >
            <SocialLink href='#'><Image src='/facebook.png' alt='facebook'/></SocialLink>
            <SocialLink href='#'><Image src='/twitter.png' alt='twitter'/></SocialLink>
            <SocialLink href='#'><Image src='/linkedin.png' alt='linkedin'/></SocialLink>
        </Right>
      </FooterContainer>
    </FooterWrap>
  )
}

export default Footer