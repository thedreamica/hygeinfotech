export const h2 = {
    fontSize:{lg:'60px',xs:'35px',md:'45px'},
    letterSpacing: 'normal',
    fontWeight: 800,
}

export const h2PrimaryHollow = {
    ...h2,
    WebkitTextStroke:' 1px #EEB609',
    WebkitTextFillColor:'#ffffff',
    display:'inline',
}

export const h2Primary = {
    ...h2,
    color:'#EEB609'
}

export const caption = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize:{xs:'13px',lg:'25px',md:'18px'},
    lineHeight:{xs:'20px',lg:'40px',md:'30px'},
    color: '#6C7A89',
}

export const buttonPrimary = {
    minHeight: '72px',
    border:'1px solid #000000',
    padding: '15px 32px 17px',
    borderRadius:'50px',
    background:'linear-gradient(to left, white 50%, #EEB609 50%) right',
    backgroundSize:'200% 100%',
    color:'#000',
    '&:hover':{
        backgroundPosition: 'left',
        transition:'all 1s ease',
        borderColor:'#000',
    },
}

export const circle = {
    width:'71px',
    height:'72px',
    borderRadius:'50%',
    border:'1px solid #000000',
    marginLeft:'10px',
    background:'linear-gradient(to left, white 50%, #EEB609 50%) right',
    backgroundSize:'200% 100%',
    '&:hover':{
        backgroundPosition: 'left',
        transition:'all 2s ease',
        borderColor:'#000',
    }
}


export const hLarge = {
    WebkitTextStroke:'0.1rem #000',
    WebkitTextFillColor:'#ffffff',
    fontSize: { lg: "300px", sm: "150px", xs: "120px" },
    lineHeight: "normal",
    opacity:0.4,
    zIndex: -1,
}

export const hLargeVertical = {
    ...hLarge,
    writingMode:{lg:'vertical-rl', sm:'horizontal-tb'},
    fontSize: { lg: "300px", sm: "150px", xs: "70px" },
    lineHeight: 0.8,
}

export const darkHallow = {
    fontWeight:'500',
    fontFamily:'Poppins',
    WebkitTextStroke:'0.02em black',
    WebkitTextFillColor:'#ffffff',
    fontSize:{lg:'80px',xs:'40px'}
}

export const lightHallow = {
    fontWeight:'500',
    fontFamily:'Poppins',
    WebkitTextStroke:'0.02em white',
    WebkitTextFillColor:'transparent',
    fontSize:{lg:'40px',xs:'40px'}
}

export const circleDark={
    backgroundColor:'#000000',
    marginLeft:{lg:'auto',xs:'45px'},
    marginRight:{lg:'auto',xs:'35px'},
    height: {lg:'195px',xs:'76px'},
    width:{lg:'195px',xs:'76px'},
    borderRadius:'50%', 
    border:'1px solid #000'
}

export const circleBlack = {
    width:'71px',
    height:'71px',
    borderRadius:'50%',
    border:'1px solid #fff',
    marginLeft:'10px',
    background:'linear-gradient(to left, black 50%, #EEB609 50%) right',
    backgroundSize:'200% 100%',
    '&:hover':{
        backgroundPosition: 'left',
        transition:'all 2s ease',
        borderColor:'#fff',
    }
}



let buttonBlack = {...buttonPrimary}
buttonBlack.background = 'linear-gradient(to left, black 50%, #EEB609 50%) right';
buttonBlack.color='#fff';
buttonBlack.border='1px solid #fff'
buttonBlack['&:hover'] = {
    backgroundPosition: 'left',
    transition:'all 2s ease',
    borderColor:'#fff',
}
export const buttonPrimaryBlack = buttonBlack;