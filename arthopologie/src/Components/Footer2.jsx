import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    List,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { AiOutlineFacebook } from 'react-icons/ai';
  import { AiFillInstagram }  from 'react-icons/ai';
  import { AiOutlineTwitter}  from 'react-icons/ai';
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footre2() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'3xl'} py={6}  fontSize="10">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
            <Stack align={'flex-start'}>
              <Text style={{fontSize:"10"}}>Help</Text>
              <Link href={'#'}>Track Your Order</Link>
              <Stack direction={'row'}  spacing={2}>
                <Link href={'#'}>Start A Return Or Exchange(US)</Link>
              </Stack>
              <Link href={'#'}>Shipping</Link>
              <Link href={'#'}>Customer Service</Link>
              <Link href={'#'}>Current Promotions</Link>
              <Link href={'#'}>Product Recalls</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text>About Us</Text>
              <Link href={'#'}>Our Story</Link>
              <Link href={'#'}>Events</Link>
              <Link href={'#'}>A Greater Good</Link>
              <Link href={'#'}>Stories </Link>
              <Link href={'#'}>Diversity & Inclusion</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text>Services</Text>
              <Link href={'#'}>AntroLiving Designer & Trade Program</Link>
              <Link href={'#'}>Furniture:Guides & Services</Link>
              <Link href={'#'}>Store:Pickup & Collection Points</Link>
              <Link href={'#'}>Klarna</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text>Connect</Text>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Stay Connect</Link>
              <Link href={'#'}>Carrers</Link>
              <Link href={'#'}>Styling Services</Link>
              <Link href={'#'}>Request A Catalog</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
          </Flex>
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg" alt="" srcset="" />
          <AiOutlineFacebook/> <AiFillInstagram/> <AiOutlineTwitter/>
          </div>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 Chakra Templates. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }