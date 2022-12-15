import { Box,Grid,Text,Heading,Center,Input,Button, Divider } from "@chakra-ui/react"
import Footre2 from "./Footer2"
export default function Footer(){


    return <>
    <Divider/>
    <Box style={{width:"100vw",h:"500px",marginTop:"30px"}} backgroundColor="#F7F6F2" >
      <Box h="200px" ml="10vw" width="80vw" mb="-80px">
       
        <Grid templateColumns="repeat(2,1fr)" gap="5">
          
       <Box>
    
         <Text as="bold">Sign Up for Email</Text>
         <Text>Receive early access to new arrivals, sales, exclusive content, events and much more!</Text>
       </Box>
       <Box>
       <Input placeholder="Email" w="70%" mr={"50px"}/>
       <Button>Submit</Button>
       </Box>
       
       </Grid>      
      <Text fontSize="12px">
      By signing up, you will receive Anthropologie offers, promotions and other commercial messages. You are also agreeing to Anthropologie’s Privacy Policy. You may unsubscribe at any time.
       </Text>
      </Box>
      <hr/>      
    </Box>
    <Footre2/>
    </>
}