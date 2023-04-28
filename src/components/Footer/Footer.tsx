import React,{useState,useEffect} from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import { navItem,getIntouch} from '@/constants';


const Footer = () => {

  return (
       <Box sx={{
        borderRadius:{lg:"25% 25% 0 0 ",xs:"0%"},
        backgroundColor:{lg:'black',xs : "#fff"},
        color:{lg:'#ffffff',xs:'#000000'}
      }}>
        <Grid container alignItems={'center'} >
        
        <Grid container justifyContent={'right'} sx={{display:{lg:'none',xs:'flex'}}}>
          <Image
          src='/infotechLogo.png'
          alt='logo'
          width={201}
          height={90}
          priority
          />
        </Grid>
        
            <Grid container justifyContent={ {lg:'right',xs: 'left'}}>
            <Grid item xs={12} lg={3} mt={10} pl={3} sx={{display:{lg:'flex',xs:'none'}}}>
              <Image
              src='/infotechLogo.png'
              alt='logo'
              width={201}
              height={90}
              priority
              />
            </Grid>
            
              <Grid item xs={12} lg={4} mt={{lg:10,xs:1}}sx={{
                    fontFamily: 'Montserrat',
                    fontSize:{lg:'26px',sx:'15px'},
                    fontWeight: '400',
                    color: {lg:'#ffffff',xs:'#5f5f5f'}                 
                  }} >
                  <Typography variant={'h6'}>
                    Office
                  </Typography>
                  <Typography variant={'body1'}sx={{
                    fontFamily: 'Montserrat',
                    color: '#AFAEAF'
                  }}>
                    Dot Cowork - Tidel Park, 
                    <br/>
                    1st Floor D Block, Tharamani, 
                    <br/>
                    Chennai - 600113
                  </Typography>
                  <Typography variant='body2' mt={{lg:6,xs:0}}>
                  +91 709-222-0001
                  </Typography>
                  <Typography variant={'body2'} mt={2}>
                  admin@hygeinfotech.com
                  </Typography>
              </Grid>
                  <Grid item xs={12} lg={2} mt={ {lg:10,xs : 2}} sx={{display:{lg:'block',xs:'none'}}}>
                  <Typography variant={'h6'}>
                    Links
                  </Typography>
                  {navItem.map(item=>{
                    return (<Typography variant={'body2'} mt={2}>
                      {item.text}
                    </Typography> )
                  })}
              </Grid>
              <Grid item xs={12} lg={3}  mt={{lg:10,xs:2}}>
                  <Typography variant={'h6'}>
                  Get in Touch
                  </Typography>
                  {
                    getIntouch.map((item,index)=>{
                      return(
                        <Grid container mt={2}  key={index}>
                          <Grid item lg={1.2} xs={0.5}>
                            <Box component='img'
                            src={item.link}
                            alt='icon'
                            sx={{display:{lg:'inline-flex',xs:'none'},width:'20px',height:'20px'}}
                            />
                             <Box component='img'
                            src={item.darkLink}
                            alt='icon'
                            sx={{display:{xs:'inline-flex',lg:'none'},width:'20px',height:'20px'}}
                            />
                          </Grid>
                          <Grid item xs={10.5} alignItems={'center'}  >
                          <Typography variant='body2'>
                            {item.text}
                          </Typography>
                          </Grid>
                          
                        </Grid>
                      )
                    })
                  }
              </Grid>
            </Grid>
        </Grid>
        <Grid container justifyContent={'right'} mt={5} pb={2}>
          <Grid item xs={12} lg={6}>
          <Typography variant={'body2'} sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
          }}>
          &#169;2023 Hyge Info Tech. All Rights Reserved
          </Typography>
          </Grid>
          <Grid item lg={3} sx={{display:{lg:'inline-flex',xs:'none'}}}>
            <span  style={{
              borderBottom:'1px solid #EEB609',
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '18px',
              }}>
            Terms and conditions
            </span>
          </Grid>
        </Grid>
       </Box>
  )
}

export default Footer
