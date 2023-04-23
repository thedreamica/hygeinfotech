import { Grid,Box, Typography,Chip,Button } from '@mui/material'
import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import styles from '@styles/Home.module.css';
import { differences,process } from '@/constants';

const Preface = () => {
    const [width,setWidth] = useState(0);
    const desktopPros={
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        rowGap:'20px',
        margin:'10%'
    };
    const mobileProps = {
        display:'grid',
        gridTemplateColumns:'repeat(2,1fr)',
        rowGap:'20px',
        columnGap:'20px',
        margin:'10%'
    }
    useEffect(()=>{
        setWidth(window.outerWidth);
    },[])
  return (
      <div className={styles.preface}>
            <Grid container justifyContent={'center'} mt={5}>
                <Grid item lg={8} xs={10}>
                    <Typography variant='h2' className={styles.h2}  component={'h2'}>
                        Reshape the future 
                    </Typography>
                    <Typography variant='h2' className={styles.h2}  component={'h2'}>
                        With our
                    </Typography>
                    <Typography align='justify' className={styles.h2} variant='h2' component={'h2'}  >
                        <span className={styles.primary}>Revenue</span> 
                        <span className={styles.primaryShadow}> Cycle Management</span>
                    </Typography>
                    <Grid container xs={12} lg={9} mt={2}>
                    <Typography align='left' variant='caption' sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize:width > 800 ?'25px':'13px',
                        lineHeight:width > 800? '40px':'20px',
                        letterSpacing: '0.01em',
                        color: '#6C7A89',
                    }}>
                    Discover new heights with our IT services.
                    Our innovative approaches for RCM, digital marketing, 
                    and DevOps can turn your business operations into a revenue-generating powerhouse.
                    Let us show you how to leverage these services and take your business to the next level.
                    </Typography>
                    </Grid>
                    <Grid container mt={2}>
                    <Grid item>
                        <Button variant={'outlined'} onClick={()=>{}} sx={{width:'140px',height:'50px',border:'1px solid #000000',borderRadius:'50px',color:'#000'}}>
                            Discover Me
                        </Button>
                    </Grid>
                    <Grid item>
                    <Button variant={'outlined'} onClick={()=>{}} sx={{width:'50px',height:'50px',borderRadius:'50%',border:'1px solid #000000',marginLeft:'10px'}}>
                        <Image
                        src={'/right.png'}
                        alt={'right arrow'}
                        width={35}
                        height={30}
                        style={{marginTop:'5px'}}
                        priority/>
                    </Button>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Typography sx={{
                    WebkitTextStroke:'0.05rem #000',
                    WebkitTextFillColor:'#ffffff',
                    fontSize:width>800 ? '300px' : '200px'
                }} variant={'h1'}>
                    hyge
                </Typography>
            </Grid>
            <Grid container>
                <Typography variant={'body2'} align='left' ml={2} sx={{fontSize:'20px',color:'#afafaf'}} mt={2} >
                    What set us apart?
                </Typography>
            </Grid>
            <Grid container justifyContent={'right'}>
                <Grid item xs={12} sm={8} ml={ width > 800 ? 0 : 3} mt={2}>
                    <Typography variant='h4' sx={{
                        fontFamily: 'Poppins',
                        fontSize: width > 800 ? '52px' : '26px',
                        fontWeight: 700,
                    }}>
                    Nothing ever becomes comfortable till you experience it with
                    <span className={styles.primary}> hyge</span>
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: width > 800 ? '40px':'20px',
                        lineHeight:width > 800 ?'65px':'40px',
                        color: '#6C7A89'
                    }} variant={'h6'} mt={2}>
                    Our solutions are tailored to your needs, with hyper-flexibility, expert customer support, continuous improvement, and collaborative partnerships. Experience the comfort of working with us and streamline your business processes seamlessly.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2} style={{position:'relative'}} mt={width > 800 ? 0 : 5}  >
                    <Box className={styles.roundDiv1}>
                        <Image 
                            src='/vector.png'
                            alt='vector'
                            width={100}
                            height={122}
                            className={styles.vector}
                            priority
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} mt={12}>
                    <Typography variant={'h1'} sx={{fontWeight:'700'}}>
                        Know the <span className={styles.primary}>[</span>Hyge<span className={styles.primary}>]</span>
                    </Typography>
            </Grid>
            <Grid container justifyContent={'center'}>
                    <Typography variant={'h1'} sx={{fontWeight:'700'}}>
                    <span className={styles.darkShadow}>difference</span> 
                    </Typography>
            </Grid>
    <Box sx={width > 800 ? desktopPros : mobileProps}>
                    {
                        differences.map(item=>{
                            return(
                            <Box sx={
                                        {
                                            width:'195px',
                                            height:'195px',
                                            borderRadius:'50%',
                                            border:'1px solid #000',
                                            textAlign:'center',
                                        }}>
                                <Box mt={8}>
                                    <Typography variant='h6'>
                                        {item.value}
                                    </Typography>
                                    <Typography variant='body1'>
                                        {item.item}
                                    </Typography>
                                </Box>
                            </Box>
                            )
                        })
                    }
    </Box>
            <Grid container mt={10}>
            <Typography variant={'caption'} ml={2}>
               How we do?
            </Typography>
            <Grid container xs={5} justifyContent={'center'}>
            <Typography variant={'h1'} >
                <span className={styles.secondary}>process</span>
            </Typography>
            </Grid>
            <Grid container  justifyContent={'right'} xs={10}>
            <Typography variant='h1'>
            <span className={styles.primary}> driven</span> design
            </Typography>
            </Grid>
            </Grid>

            <Grid container justifyContent={'center'}>
                {
                    width > 800 ? 
                    <Image 
                    src='/processD.png'
                    alt='process flow'
                    className={styles.process}
                    width={width-250}
                    height={500}
                    priority
                    /> :
                <Grid item xs={12} sx={{textAlign:'center'}} mt={3}> 
                    <Image 
                    src='/processM.png'
                    alt='process flow'
                    className={styles.process}
                    width={299}
                    height={165}
                    priority
                    />
                    <Grid container justifyContent={'center'} mt={3}>
                    {
                        process.map((proc)=>{
                            return (
                                <Grid item justifyContent={'center'} xs={8}>
                                    <Typography variant={'h5'} sx={{fontWeight:'600'}} align='center'>
                                        {proc.id}
                                    </Typography>
                                    <Grid container justifyContent={'center'}>
                                    <Chip variant='outlined' label={proc.topic} sx={{border:'1px solid black',color:'#EEB609',fontSize:'15px',fontFamily:'poppins',fontWeight:'900'}}></Chip>
                                    </Grid>
                                    <Typography variant='body1' align='center'>
                                        {proc.text}
                                    </Typography>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </Grid>
                }
            </Grid>
            <Grid container  mt={2}>
                <Grid item xs={12} lg={6}>
                    {
                        width < 800 &&(
                            <Typography sx={{
                                fontSize: "80px",
                                fontWeight: '700',
                                textAlign: "center",
                                color:"#EEB609" 
                            }}>
                                * 
                            </Typography>
                        )
                    }
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: width > 800 ?'160px': "40px",
                        fontWeight: '700',
                        textAlign: width > 800 ? 'left' : "center",  
                        marginTop:  width < 800 ? '-50px' :""
                    }}>
                       We Are 
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontSize:  width > 800 ?'50px':"30px",
                        fontWeight: '400',
                        textAlign:'center',
                    }}>
                       commited to delivering, user centric, Effective and sustainable solution.
                    </Typography>
                </Grid>
            </Grid>
        <Grid container mt={3} justifyContent={width > 800 ? 'space-evenly' : 'center'} alignItems={'center'} sx={width > 800 ? {
                height:'300px',
                backgroundColor:'#0033FF'
        }:{}}>
            <Grid item lg={4} xs={12} sx={{textAlign:'center'}}>
            <Image 
                src={width > 800 ? '/158.png':'/158Dark.png'}
                alt='logo'
                className={styles.process}
                width={149}
                height={69}
                priority
                />
            </Grid>
            <Grid item lg={4} xs={6} sx={{textAlign:'center'}}>
            <Image 
                src={width > 800 ? '/138.png': '/138Dark.png'}
                alt='logo'
                className={styles.process}
                width={182}
                height={69}
                priority
                />
            </Grid>
            <Grid item lg={4} xs={6} sx={{textAlign:'center'}}>
            <Image 
                src={width > 800 ? '/139.png':'/139Dark.png'}
                alt='logo'
                className={styles.process}
                width={207}
                height={70}
                priority
                />
            </Grid>
            </Grid>

            <Grid container justifyContent={'center'} style={{marginTop:"50px"}}>
            <div >
                        <Image
                        src="/vectorLight.png"
                        alt="vector"
                        className={styles.vector}
                        height={127}
                        width={99}
                        priority
                        />
                    </div>
            </Grid>
        <Grid container sx={{
                backgroundColor:width < 800 ? "#000" : "#ffffff",
                color:width < 800 ?"#ffffff" : "#000",
                }}>
            {width  > 800 && 
            <Grid container  xs={12} sm={12} mt={2} >
                    <Box className={styles.roundDiv2} sx={{backgroundColor:'#000000',marginLeft:'auto',marginRight:'auto'}} >
                        <Image 
                            src='/vectorLight.png'
                            alt='vector'
                            width={100}
                            height={122}
                            className={styles.vector}
                            priority
                        />
                    </Box>
                </Grid>
            }
            <Grid container justifyContent={'center'} >
            <Typography variant='h2' className={styles.h2}  component={'h2'} mt={5}>
                        Let's talk  
            </Typography>
            </Grid>
            <Grid container justifyContent={'center'} mb={5} >
                    <Grid item>
                        <Button variant={'outlined'} onClick={()=>{}} sx={{
                            width:'140px',
                            height:'50px',
                            border:width > 800 ? '1px solid #000000' : '2px solid #ffffff',
                            borderRadius:'50px',
                            color:width > 800 ? '#000' : '#fff',
                        }}
                            >
                            Discover Me
                        </Button>
                    </Grid>
                    <Grid item>
                    <Button variant={'outlined'} onClick={()=>{}} 
                    sx={{width:'50px',height:'50px',borderRadius:'50%',
                    border:width > 800 ? '1px solid #000000' : '2px solid #ffffff',
                    marginLeft:'10px'}}>
                        <Image
                        src={width > 800 ? '/right.png':'/rightLight.png'}
                        alt={'right arrow'}
                        width={35}
                        height={30}
                        style={{marginTop:'5px'}}
                        priority/>
                    </Button>
                    </Grid>
                </Grid>
        </Grid>
    </div>
  )
}

export default Preface
