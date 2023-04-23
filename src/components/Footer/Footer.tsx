import React,{useState,useEffect} from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import { navItem,getIntouch} from '@/constants';


const Footer = () => {
    const [width, setWidth] = useState(true);
    useEffect(()=>{
        setWidth(window.outerWidth > 800);
    },[])
  return (
       <Box sx={{
        borderRadius:width ? "25% 25% 0 0 " : "0%",
        backgroundColor:width ? 'black' : "#fff",
        color:width ? '#ffffff': '#000000'
      }}>
        <Grid container alignItems={'center'} >

            <Grid container justifyContent={width ? 'right' : 'left'}>
            <Grid item xs={12} lg={3} mt={10} pl={3}>
              <Image
              src='/infotechLogo.png'
              alt='logo'
              width={201}
              height={90}
              priority
              />
            </Grid>
              <Grid item xs={12} lg={4} mt={10}sx={{
                    fontFamily: 'Montserrat',
                    fontSize:width ? '26px':'15px',
                    fontWeight: '400',
                    color: width ? '#ffffff' :'#5f5f5f'                 
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
                  <Typography variant='body2' mt={width ? 6 : 0}>
                  +91 709-222-0001
                  </Typography>
                  <Typography variant={'body2'} mt={2}>
                  admin@hygeinfotech.com
                  </Typography>
              </Grid>
              {width && (
                  <Grid item xs={12} lg={2} mt={10}>
                  <Typography variant={'h6'}>
                    Links
                  </Typography>
                  {navItem.map(item=>{
                    return (<Typography variant={'body2'} mt={2}>
                      {item.text}
                    </Typography> )
                  })}
              </Grid>
              )}
              <Grid item xs={12} lg={3}  mt={10}>
                  <Typography variant={'h6'}>
                  Get in Touch
                  </Typography>
                  {
                    getIntouch.map(item=>{
                      return(
                        <Grid container mt={2}>
                          <Grid item xs={1} >
                            <Image 
                            src={width ? item.link : item.darkLink}
                            alt="icon"
                            width={20}
                            height={20}
                            priority
                            />
                          </Grid>
                          <Grid item xs={11} alignItems={'center'}  >
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
{width &&
          <Grid item xs={12} lg={3}>
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
}
        </Grid>
       </Box>
  )
}

export default Footer
