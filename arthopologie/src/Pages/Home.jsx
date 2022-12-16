import React from 'react';

import Final from '../Components/Carousel/Final';
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
  Grid,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import{Link as RouterLink} from "react-router-dom"
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(0)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
   
      image:
        'https://images.ctfassets.net/5de70he6op10/NA9VbtVn4KtwiQST6Blor/d3093ccc502cb9393d54e0ab374f6eb0/121122_30OffPrimrose_HPGSecondaryBanner_LS_02.jpg?w=2882&q=80&fm=webp',
    },
    {
   
      image:
        'https://images.ctfassets.net/5de70he6op10/g4Rao5dp4XYh9mHJ31Mku/d4fa659fb2753c2aba8ff20538ba126f/121322_Upto50Off_SelectGifting_HPGSecondaryBanner_LS.jpg?w=2882&q=80&fm=webp',
    },
  ];
  const data=[
    {img:"https://images.ctfassets.net/5de70he6op10/1UtgIRn3AHo7yfB3CsbYdw/ced16c178459bc64efcf64a82422808b/LL_M1a.jpg?w=856&q=80&fm=webp",title:"SHOP-New Arrivals"},
    {img:"https://images.ctfassets.net/5de70he6op10/3RVZ7uybOuPPShdGFMqT8v/b5959346a8523c91664dd622f29f0b42/LL_M1b.jpg?w=856&q=80&fm=webp",title:"SHOP-Jackets"},
    {img:"https://images.ctfassets.net/5de70he6op10/29ixjcb2lf5i9QNbF0PWJq/6548be3127a3a13e7b4f13e6f029d059/LL_M1c.jpg?w=856&q=80&fm=webp",title:"HIT THE-Holiday Party Shop"},
    {img:"https://images.ctfassets.net/5de70he6op10/575n66TNKySGUMZHoEPyk1/a8c0be74eb5f6fb558385a19b5cfc120/LL_M1d.jpg?w=856&q=80&fm=webp",title:"SHOP-Dress"},
    {img:"https://images.ctfassets.net/5de70he6op10/2FN1eYunGjb7iEefWXUqzL/9ebe26aa22ab3e675b1f27195af512f6/LL_M1e.jpg?w=856&q=80&fm=webp",title:"SHOP-Shoes"},
    {img:"https://images.ctfassets.net/5de70he6op10/4zCA1PXpVLBKmHSl7Od02R/1b5efdb8c8bb14c2edfa17d49818a4b5/LL_M1f.jpg?w=856&q=80&fm=webp",title:"SHOP-Accessories"},
    ]
    const data2=[
      {img:"https://images.ctfassets.net/5de70he6op10/7xr3zj76r8uzB0cWfUrKQR/ed4322b5e2ed657b06321686489bb645/LS_M3_Home_Thursday.jpg?w=2640&q=80&fm=webp",title:"shop gifts forn the home"}
    ]
    const data3=[
      {img:"https://images.ctfassets.net/5de70he6op10/4Coxu47V0tyfirEz2UcoJM/176476dd10f81019582c3e3de68eaefa/LS_M4_Winterwhites.jpg?w=2641&q=80&fm=webp",title:"shop all clothing"}
    ]
    const data4=[
      {img:"https://images.ctfassets.net/5de70he6op10/6smg43UznC0EXEEvtUZOeK/2d857986576d95ecf780716a37fc0b77/LS_M5_BHLDN.jpg?w=2641&q=80&fm=webp",title:"shop the spring '23 collection"}
    ]
    const data5=[
      {img:"https://images.ctfassets.net/5de70he6op10/3nbfFkkusdFDrzp6kA4OIl/8ea10bc434ae2397c6543085c9d3d01d/111422_HPG_RR_Furniture.jpg?w=856&q=80&fm=webp",title:"shop furniture"},
      {img:"https://images.ctfassets.net/5de70he6op10/CShsGv8tmOEkdHcEZKrZn/4496b2a68f8b9d4b5efee0ed2fb17690/RR_BeddingPillowsThrows.jpg?w=856&q=80&fm=webp",title:"shop beddding,pillows & throws"},
      {img:"https://images.ctfassets.net/5de70he6op10/5wTKXC5wjHWgVTJDtirqZG/09b9d97dbe5f7e80923d24f7221e35e2/RR_Candles_Default.jpg?w=856&q=80&fm=webp",title:"shop candles"},
     
      ]
      const data6=[
        {img:"https://images.urbndata.com/is/image/Anthropologie/68319789_913_b10?$an-category$&qlt=80&fit=constrain",title:"Arctic Monogram Ornament"},
        {img:"https://images.urbndata.com/is/image/Anthropologie/993434_021_b10?$an-category$&qlt=80&fit=constrain",title:"Boulangerie Jar Candle"},
        {img:"https://images.urbndata.com/is/image/Anthropologie/45989522_010_b14?$an-category$&qlt=80&fit=constrain",title:"Hero Cosmetic Mighty Patch Set"},
        {img:"https://images.urbndata.com/is/image/Anthropologie/43673730_030_b10?$an-category$&qlt=80&fit=constrain",title:"Tocca Mini Hand Cream"},
        {img:"https://images.urbndata.com/is/image/Anthropologie/53724381_004_b?$an-category$&qlt=80&fit=constrain",title:"VOLO Hair Hero Quick-Dry Towel"},
        ]
        const data7=[
          {img:"https://images.urbndata.com/is/image/Anthropologie/52961133_014_b2?$an-category$&qlt=80&fit=constrain",title:"My Weather Station TOY Set"},
          {img:"https://images.urbndata.com/is/image/Anthropologie/62650189_032_b2?$an-category$&qlt=80&fit=constrain",title:"BHLDNE Leia Satin Charmesue Dress"},
          {img:"https://images.urbndata.com/is/image/Anthropologie/54684865_011_b14?$an-category$&qlt=80&fit=constrain",title:"Jenny by Jenny Yoo Lourdes Gown"},
          {img:"https://images.urbndata.com/is/image/Anthropologie/60589611_001_b2?$an-category$&qlt=80&fit=constrain",title:"Fern Bar Cabinet"},
          {img:"https://images.urbndata.com/is/image/Anthropologie/69218808_080_b2?$an-category$&qlt=80&fit=constrain",title:"BHLDNE Leia Satin Charmesue Mini Dress"},
          ]
          const data8=[
            {img:"https://images.ctfassets.net/5de70he6op10/61SwHEwIBXGqyievjZO7vG/4399fed484247331197d235ddd824007/MTE_1_Giftcards.jpg?w=856&q=80&fm=webp",name:"The Sure-to-Please Shop",title:"The best present?The one they pick themeselves!"},
            {img:"https://images.ctfassets.net/5de70he6op10/5rXqHDYoqXytAscv6my5TW/26470fa9cfec82723705866d62c341bb/MTE_3.jpg?w=856&q=80&fm=webp",name:"The Art of the Dress",title:"Introducing a lovingly curated collection of sculptural silhouettes,enlightened details,and everlasting impressions."},
            {img:"https://images.ctfassets.net/5de70he6op10/4lWXFXOjiia6HPkbeCNQGK/47e13656ccbcb123efc765f17b3d903d/MTE_3_Resortwear.jpg?w=856&q=80&fm=webp",name:"Destination:Vaction",title:"If sunshine is state of mind, considerthese looks virtual boarding pass."},
          
            ]
  return <>
    <Center>
    <Box
    marginTop={10}
      position={'relative'}
      height={'100px'}
      width={'90%'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'-99xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="100px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                 {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    </Center>
    
 <Grid templateColumns="repeat(3,30%)" ml="5%" gap="7" mt="40px">

    {data.map((item,i)=>(
      <div  key={i}>
          <RouterLink to="/products">
        <Box>
       <img src={item.img} width="100%"/>  
       </Box> 
       </RouterLink>
       </div>    
    ))}
    
 </Grid>
       
 <Grid  ml="5%"  mt="40px">
{data2.map((item,i)=>(
  <div  key={i}>
     <RouterLink to="/products">
    <Box>
   <img src={item.img} width="95%"/>  
   </Box> 
   </RouterLink>
   <Center>
   <Button style={{width:"auto",backgroundColor:"white", mt:"-100px",position:"relative",bottom:"70px",borderRadius:"none"}}>
    {item.title}
      
    </Button>   
    </Center> 
   </div>    
))}
</Grid>
<Grid  ml="5%"  mt="40px">
{data3.map((item,i)=>(
  <div  key={i}>
     <RouterLink to="/products">
    <Box>
   <img src={item.img} width="95%"/>  
   </Box>
   </RouterLink>
   <Center>
   <Button style={{width:"auto",backgroundColor:"white", mt:"-100px",position:"relative",bottom:"70px",borderRadius:"none"}}>
    {item.title}
      
    </Button>   
    </Center> 
   </div>    
))}
</Grid>
 
<Grid  ml="5%"  mt="40px">
{data4.map((item,i)=>(
  <div  key={i} >
     <RouterLink to="/products">
     <Box>
   <img src={item.img} width="95%"/>
   </Box>
   </RouterLink>
   <Center>
   <Button style={{width:"auto",backgroundColor:"white", mt:"-100px",position:"relative",bottom:"70px",borderRadius:"none"}}>
    {item.title}
      
    </Button>   
    </Center>
   </div>    
))}
</Grid>

<Grid templateColumns="repeat(3,30.2%)" ml="5%" gap="7" mt="40px">

    {data5.map((item,i)=>(
      <div  key={i}>
         <RouterLink to="/products">
        <Box>
       <img src={item.img} width="100%"/>   
       </Box>
       </RouterLink>
       <Center>
   <Button style={{width:"auto",backgroundColor:"white", mt:"-100px",position:"relative",bottom:"70px",borderRadius:"none"}}>
    {item.title}
      
    </Button>   
    </Center>
       </div>    
    ))}
    
 </Grid>
 <Text style={{marginLeft:"68px"}}> You May Also Like</Text>
 <hr/>
 <Grid templateColumns="repeat(5,18%)" ml="5%" gap="4" mt="40px">

{data6.map((item,i)=>(
  <div  key={i}>
      <RouterLink to="/products">
    <Box>
   <img src={item.img} width="100%"/>  
   </Box> 
   </RouterLink>
   <Center>{item.title}</Center>
   </div>    
))}

</Grid>

<Text style={{marginLeft:"68px",marginTop:"90px"}}> Trending</Text>
 <hr/>

 {/* <Grid templateColumns="repeat(5,18%)" ml="5%" gap="4" mt="20px">

{data7.map((item,i)=>(
  <div  key={i}>
     <RouterLink to="/products">
    <Box>
   <img src={item.img} width="100%"/>  
   </Box> 
   </RouterLink>
   <Center>{item.title}</Center>
   </div>    
))}
</Grid> */}
<Final/>
<Center>
<Text style={{marginLeft:"68px",marginTop:"90px"}}> More</Text>
</Center>
 <hr/>

 <Grid templateColumns="repeat(3,30%)" ml="5%" gap="7" mt="40px" backgroundColor="whitesmoke">

{data8.map((item,i)=>(
  <div  key={i}>
      <RouterLink to="/products">
    <Box>
   <img src={item.img} width="100%"/>  
   </Box> 
   </RouterLink>
   <Text fontWeight="300">
   {item.name}
   </Text>
  <Text fontSize="12">
    {item.title}</Text>
   
   
   </div>    
))}
</Grid>
<Center>
<Text style={{marginLeft:"68px",marginTop:"90px", marginBottom:"50px"}}> Exclusions apply.See details</Text>
</Center>
 <hr/>

 <Text style={{marginLeft:"68px",marginTop:"30px"}}> About Us</Text>

 <Text style={{marginLeft:"68px",marginTop:"30px"}}> Our mission at Anthropologie has always been to surprise and delight you with unexpected, distinctive finds for your closet and home. We source and craft all of our products with care, ensuring that any treasure you find at Anthropologie is unique, just like you. Explore our dresses shop to find styles and fits perfect for any occasion, from cocktail party dresses to wedding...</Text>
  </>
};



