import Head from 'next/head'
// import Image from 'next/image'
import { Red_Hat_Display } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Center, Box, VStack, HStack, Circle, Flex, Link, Heading, Button, Text, Image,Spacer } from '@chakra-ui/react';

const redHat = Red_Hat_Display({ weight:['500', '700', '900'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Order Summary</title>
        <meta name="description" content="Generated by Nida Nido" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32" />
      </Head>
      <main className={redHat.className}>
        <Box w='100vw' h='100vh' bg="brand.paleBlue" fontSize={{base:'14px', xl:'16px'}} >
          <Center w='100%' h='100%' bgImage='url("/images/pattern-background-desktop.svg")' bgRepeat="no-repeat" >
            <VStack bg="white" w='90%' maxW='350px' maxH='90vh'
              borderRadius='20px'
              // spacing={35}
             >
              <Image src="/images/illustration-hero.svg" width='100%' borderTopRightRadius='20px' borderTopLeftRadius={20} />
              <Flex p={{base:"15px", xl:"25px"}} flexDir='column' justifyContent='space-around' h='100%'>
                <Box  textAlign='center' mb={{base:"10px", xl:'20px'}}>
                  <Text fontSize={{base:"20px",xl:'25px'}} fontWeight='900' color='brand.dark' mb={{base:"8px", xl:'15px'}}>Order Summary</Text>
                  <Text color="brand.desaturated" fontSize='14px'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</Text>
                </Box>
                <Box px='15px' w='100%'>
                  <Flex bg='brand.veryPale' p='15px' borderRadius='10px' width='100%' mb={{base:"10px", xl:'20px'}}>
                    <Image src="/images/icon-music.svg" width={{base:'40px', xl:'50px'}} mr='15px' alt='icon music' />
                    
                    <Box>
                      <Text fontWeight='bold' color="brand.dark">Annual Plan</Text>
                      <Text color="brand.desaturated">$59.99/year</Text>
                    </Box>
                    <Spacer />
                    <Center>
                      <Link href='#' color='brand.brightBlue' textDecor='underline' _hover={{color:"brand.desaturated", textDecor:"none"}}>Change</Link>
                    </Center>
                    
                  </Flex>
                </Box>
                
                <Box p='15px' w='100%'>
                  <Button w='100%' bg="brand.brightBlue" color="white" mb={{base:"8px", xl:'15px'}}
                    fontSize={{base:'14px', xl:'16px'}}
                  _hover={{bg:"brand.desaturated"}}>Proceed to Payment</Button>
                  <Center>
                    <Link color='brand.desaturated' fontWeight='bold' _hover={{color:"brand.dark"}}>Cancel Order</Link>  
                  </Center>
                  
                </Box>
              </Flex>
              
              
            </VStack>
          </Center>

        </Box>
      </main>
    </>
  )
}
