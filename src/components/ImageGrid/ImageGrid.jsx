import React,{useEffect} from 'react'
import {differences} from '@constants'
import { Grid,Box, Typography } from '@mui/material'

const ImageGrid = (scrollY) => {

  return (
    <Grid container lg={12} xs={12} gap={2} justifyContent={'center'} mt={5}>
        {
            differences.map((diff,index)=>{
                return(
                    <Grid item  key={index} sx={{
                        width:{xs:'200px',xl:'350px', lg:'300px',sm:'200px',md:'250px'},
                        height:{xs:'200px',xl:'350px', lg:'300px',sm:'200px',md:'250px'},
                        borderRadius:'50%',
                        border:'0.5px solid #000',
                        textAlign:'center'}}
                       
                        >
                        <Typography variant='h4' sx={{marginTop:{lg:'30%',md:'35%',sm:'30%',xs:'40%'},fontSize:{xl:'60px',lg:'50px',md:'40px',sm:'30px',xs:'20px'}}}>
                            {diff.value}
                        </Typography>
                        <Typography variant='h6' sx={{width:'90%',marginLeft:'auto',marginRight:'auto',fontSize:{xl:'32px',lg:'25px',md:'22px',sm:'18px',xs:'13px'},textTransform:'capitalize'}}>
                            {diff.item}
                        </Typography>
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default ImageGrid