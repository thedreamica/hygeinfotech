import React, {useState,useEffect } from 'react'
import styles from '@styles/Home.module.css'
import { Grid,Button } from '@mui/material'
import Image from 'next/image'
import { navItem } from '@constants'

const Navbar = () => {
  const [active,setActive] = useState(0);
  const [visible,setVisible] =useState(false);
  const [width,setWidth] = useState(0);
  useEffect(()=>{
    setWidth(window.outerWidth);
  },[])
  return (
    <div className={styles.nav}>
                <Grid container className={styles.navbar} alignItems={'center'}>
                  <Grid item xs={5}>
                    <Image
                    src={"/infotechLogo.png"}
                    alt="Hype Logo"
                    className={styles.logo}
                    height={90}
                    width={201}
                    priority
                    />
                    {/* <h4 className={styles.logoText}>infoTech</h4> */}
                  </Grid>
                  <Grid item xs={7}>
                    {
                      width > 800 ? 
                      <Grid container justifyContent={'space-evenly'} alignItems={'center'} className={styles.navItemContainer}>
                      {
                        navItem.map((item,index)=>{
                          return (<Grid item key={index}>
                            <label className={styles.navItem +" "+ (active === index ? styles.active : "")} onClick={()=>{setActive(index)}}>
                              {item.text}
                            </label>
                          </Grid>) 
                        })
                      }
                    </Grid>:
                    <Grid container justifyContent={'right'}>
                    <Image 
                    src={!visible ? '/hamburgerOutlined.png' : '/cancel.png'}
                    alt = 'button'
                    height={40}
                    width={40}
                    onClick={()=>{setVisible(!visible)}}
                    priority
                    />
                    </Grid>
                    }
                  </Grid>
                </Grid>
                {
                  width < 800 && visible && (
                    <div>
                      {
                        navItem.map((item,index)=>{
                          return (<Grid container justifyContent={'center'} key={index}>
                            <label className={styles.navItem +" "+ (active === index ? styles.active : "")}onClick={()=>{setActive(index);setVisible(false)}}>
                              {item.text}
                            </label>
                          </Grid>) 
                        })
                      }
                     </div>
                  )
                }
            </div>
  )
}

export default Navbar
