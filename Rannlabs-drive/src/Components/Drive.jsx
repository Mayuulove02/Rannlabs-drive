import { Avatar,Button,Card,CardBody,Container, Grid, GridItem, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import logo from "../assets/logo.png"

const Drive = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    < > 
    <Container maxW="8xl">

       <div className="main" >
        <div className='nav' style={{display:"flex",justifyContent:"space-between"}}>
          <div className='logo'>
            <Image src={logo} alt="logo" width="25%"/>
          </div>
          <div className='search' >
          <Input variant='filled' placeholder='Search' htmlSize={100} width='auto'/>
          </div>
        </div>
        <hr />
          <div className='header' style={{marginTop:"10px"}}>
          <Button onClick={onOpen} color="#01addb"> New +</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#01addb">Upload a new Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            Please upload a file to your drive
          </ModalBody>

          <ModalFooter>
            <Button  onClick={onClose} color="#01addb">
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </div>
        </div> 
        <Text textAlign="left" fontSize="xl" color="#01addb">Folders</Text>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} marginTop="10px">
  <GridItem  bg='gray.300' borderRadius="10px"><Text margin="5px" fontSize="lg" cursor="pointer">Documents</Text></GridItem>
  <GridItem  bg='gray.300' borderRadius="10px"><Text marginTop="5px" fontSize="lg" cursor="pointer">Important docs</Text></GridItem>
  
  
</Grid>
<br/>
<Text textAlign="left" fontSize="xl" color="#01addb">Files</Text>
<Grid templateColumns='repeat(4, 1fr)' gap={6} marginTop="10px">
  <GridItem   borderRadius="10px">
    <Card maxW='sm' cursor="pointer">
  <CardBody>
   <Stack mt='6' spacing='3'>
      <Text size='xl'>software_product.png</Text>
    </Stack>
    <Image
      src='https://rannlabweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/02/25094127/angular-300x300-1.png'
      alt='software_product'
      borderRadius='lg'
    />
   
  </CardBody>
 
</Card>
</GridItem>
  <GridItem   borderRadius="10px">
  <Card maxW='sm'cursor="pointer">
  <CardBody>
   <Stack mt='6' spacing='3'>
      <Text size='xl'>Digital_zone.png</Text>
    </Stack>
    <Image
      src='https://rannlabweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/08/15132321/Software-Development.gif'
      alt='Digital_zone.png'
      borderRadius='lg'
    />
   
  </CardBody>
 
</Card>
  </GridItem>
  <GridItem   borderRadius="10px">
  <Card maxW='sm' cursor="pointer">
  <CardBody>
   <Stack mt='6' spacing='3'>
      <Text size='xl'>artificial intelligence.jpg</Text>
    </Stack>
    <Image
      src='https://rannlabweb.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/08/15133020/Software-Development.png'
      alt='artificial intelligence'
      borderRadius='lg'
    />
   
  </CardBody>
 
</Card>
  </GridItem>
  <GridItem   borderRadius="10px">
  <Card maxW='sm' cursor="pointer">
  <CardBody>
   <Stack mt='6' spacing='3'>
      <Text size='xl'>Living room Sofa.png</Text>
    </Stack>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
   
  </CardBody>
 
</Card>
  </GridItem>
  
</Grid>
    </Container>
    </>
    )
}

export default Drive