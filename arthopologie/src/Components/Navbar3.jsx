import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { GiFullWoodBucketHandle } from 'react-icons/gi';
import{Link as RouterLink} from "react-router-dom"
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <RouterLink to="/">
          <Box>
            <div style={{display:"flex", alignItems:"center",justifyContent:"center"}} >
            <div>
            <img src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg" alt="" srcset="" style={{width:"50%"}} />
            </div>
            <div style={{marginLeft:"-120px"}}>
           <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" alt="" srcset="" />
            </div>
            </div>
          </Box>
          </RouterLink>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                <input type="search" 
                placeholder='search'/>
              </Button> */}
             <FormControl isRequired style={{marginLeft:"-120px",width:"200%"}}>
  {/* <FormLabel>First name</FormLabel> */}
  <Input placeholder='Search Anthropologie' />
</FormControl>
            
            <GiFullWoodBucketHandle size={"30"}/>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}