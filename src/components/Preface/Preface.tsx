import { Grid } from '@mui/material'
import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import styles from '@styles/Home.module.css';

const Preface = () => {
    const [width,setWidth] = useState(0);
    useEffect(()=>{
        setWidth(window.innerWidth);
    },[])
  return (
      <div className={styles.preface}>
            <Grid container>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={6}>
                    <label className={styles.labelh1 + " " + styles.dark}>
                        Reshape the future 
                    </label>
                    <br />
                    <label className={styles.labelh1 + " " + styles.dark}>
                       with our
                    </label>
                    <br />
                    <label className={styles.labelh2 + " " + styles.primary}>
                        Revenue
                    </label>&ensp;
                    <label className={styles.labelh2 + " " + styles.primaryShadow}>
                        Cycle Management
                    </label>
                    <br />
                    <p className={styles.prefaceContent}>
                    Discover new heights with our IT services. Our innovative approaches for RCM, digital marketing, and DevOps can turn your business operations into a revenue-generating powerhouse. Let us show you how to leverage these services and take your business to the next level.
                    </p>
                    <button className={styles.chipLight}>Discover More </button>
                    <button className={styles.rounded + " " + styles.circle}>
                        <Image 
                        src="/right.png"
                        alt="right arrow"
                        height={60}
                        width={65}
                        className={styles.arrow}
                        priority
                        />
                    </button>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'}>
                <label className={styles.labelMega + " " + styles.lightShadow} >
                    hyge
                </label>
            </Grid>
            <Grid container>
                <label className={styles.labelSmall}>
                What Sets Us Apart?
                </label>
            </Grid>
            <Grid container>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={7}>
                    <label className={styles.labelBold}>
                    Nothing ever becomes comfortable till you experience it with 
                    </label>
                    &ensp;
                    <label className={styles.labelBold + " " + styles.primary}>
                         hyge 
                    </label>
                    <br></br>
                    <label className={styles.labelRegular}>
                        Our solutions are tailored to your needs, with 
                        hyper-flexibility, expert customer support, 
                        continuous improvement, and collaborative 
                        partnerships. Experience the comfort of 
                        working with us and streamline your business processes seamlessly.
                    </label>
                </Grid>
                <Grid item xs={3} style={{position:'relative'}}>
                    <div className={styles.rounded + " " + styles.roundDiv} style={{position:'absolute',bottom:"50px",left:"10px"}}>
                        <Image
                        src="/vector.png"
                        alt="vector"
                        className={styles.vector}
                        height={127}
                        width={99}
                        priority
                        />
                    </div>
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'}>
                <Grid item xs={6}>
                    <label className={styles.labelLarge}>
                        Know the &nbsp;
                    </label>
                    <label className={styles.labelLarge+" " + styles.primary}>
                        [
                    </label>
                    <label className={styles.labelLarge}>
                        hyge
                    </label>     
                    <label className={styles.labelLarge+" " + styles.primary}>
                        ]
                    </label>
                    <br></br>
                    <label className={styles.labelLarge + " "+ styles.darkShadow}>
                        difference
                    </label>  
                </Grid>
                <Grid container justifyContent={"space-evenly"} style={{marginTop:'50px'}}>
                <Grid item className={styles.rounded + " " + styles.largeRoundDivA}>
                    <div className={styles.alignCenter}>
                        <label className={styles.labelh4}>
                            15%+
                        </label><br/>
                        <label>
                            Claim errors
                        </label>
                    </div>
                </Grid>
                <Grid item className={styles.rounded + " " + styles.largeRoundDivB}>
                <div className={styles.alignCenter}>
                        <label className={styles.labelh4}>
                            50%
                        </label><br/>
                        <label>
                            Wasted Ad Spend
                        </label>
                    </div>
                </Grid>
                <Grid item className={styles.rounded + " " + styles.largeRoundDivA}>
                <div className={styles.alignCenter}>
                        <label className={styles.labelh4}>
                            90%
                        </label><br/>
                        <label>
                            lack of patience data-quality
                        </label>
                    </div>
                </Grid>
                <Grid item className={styles.rounded + " " + styles.largeRoundDivB}>
                <div className={styles.alignCenter}>
                        <label className={styles.labelh4}>
                            7%
                        </label><br/>
                        <label>
                            Average denial rate
                        </label>
                    </div>
                </Grid>
                </Grid>
                <Grid container justifyContent={"space-evenly"} style={{marginTop:'50px'}}>
                <Grid item className={styles.rounded + " " + styles.largeRoundDivA}>
                <div className={styles.alignCenter}>
                        <label className={styles.labelh4}>
                            14.90
                        </label><br/>
                        <label>
                            hrs/week on per authourization
                        </label>
                    </div>
                </Grid>
                <Grid item className={styles.rounded + " " + styles.largeRoundDivB}>
                <div className={styles.alignCenter}>
                        <label className={styles.labelh4}>
                            75%
                        </label><br/>
                        <label>
                            Devops failure
                        </label>
                    </div>
                </Grid>
                <Grid item className={styles.rounded + " " + styles.largeRoundDivA}>
                <div className={styles.alignCenter}>
                        <label className={styles.labelh4}>
                            50%
                        </label><br/>
                        <label>
                            Higher labour costs
                        </label>
                    </div>
                </Grid>
                <Grid item className={styles.rounded + " " + styles.largeRoundDivB}>
                <div className={styles.alignCenter}>
                        <label className={styles.labelh4}>
                            46%
                        </label><br/>
                        <label>
                            Integration issue
                        </label>
                    </div>
                </Grid>
                </Grid>
            </Grid>
            <Grid container style={{marginTop:"100px"}}>
            <label className={styles.labelSmall}>
               How we do?
            </label>
            <br></br>
            <label className={styles.labelLarger + " "+styles.secondary}>
                        process
            </label>
            &ensp;
            <label className={styles.labelLarger + " "+styles.primary} style={{textAlign:'right'}}>
                        driven
            </label>&ensp;
            <label className={styles.labelLarger} >
                        design
            </label>
            </Grid>

            <Grid container justifyContent={'center'}>
                <Image 
                src='/process.png'
                alt='process flow'
                className={styles.process}
                width={width-250}
                height={500}
                priority
                />
            </Grid>

            <Grid container justifyContent={'space-evenly'} alignItems={'center'} className={styles.compliances}>
            <Grid item>
            <Image 
                src='/158.png'
                alt='logo'
                className={styles.process}
                width={149}
                height={69}
                priority
                />
            </Grid>
            <Grid item>
            <Image 
                src='/138.png'
                alt='logo'
                className={styles.process}
                width={182}
                height={69}
                priority
                />
            </Grid>
            <Grid item>
            <Image 
                src='/139.png'
                alt='logo'
                className={styles.process}
                width={207}
                height={70}
                priority
                />
            </Grid>
            </Grid>

            <Grid container justifyContent={'center'} style={{marginTop:"50px"}}>
            <div className={styles.rounded + " " + styles.roundDiv+ " "+ styles.darkDiv} >
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
            <Grid container justifyContent={'center'}>
            <label className={styles.labelLarge}>
                    Let's talk
            </label>
            <br></br>
            </Grid>
            <Grid container justifyContent={'center'}>
            <button className={styles.chipLight}>Discover More </button>
                    <button className={styles.rounded + " " + styles.circle}>
                        <Image 
                        src="/right.png"
                        alt="right arrow"
                        height={60}
                        width={65}
                        className={styles.arrow}
                        priority
                        />
                    </button>
            </Grid>
      </div>
  )
}

export default Preface
