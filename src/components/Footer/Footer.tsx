import React,{useState,useEffect} from 'react'
import { Grid } from '@mui/material'
import styles from '@styles/Home.module.css'
import Image from 'next/image';

const Footer = () => {
    const [width, setWidth] = useState(0);
    useEffect(()=>{
        setWidth(window.outerWidth)
    },[])
  return (
    <Grid container justifyContent={'center'}>
    {width > 800 ?
    <Grid container>
    <div className={styles.footer}>
        <Grid container alignItems={'center'} justifyContent={'flex-start'} style={{marginTop:'200px'}}>
            <Image 
            src = "/logo.png"
            alt="logo"
            width={321}
            height={131}
            priority
            />
        </Grid>
        </div>
    </Grid>:
    <div className={styles.mobileFooter}>

    </div>
    }
    </Grid>
  )
}

export default Footer
