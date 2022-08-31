import React from 'react'
import "./gym.css";
import { StarIcon } from '@chakra-ui/icons'
import { Flex,Box,Image,Button } from '@chakra-ui/react';
const NearGymList = ({el}) =>{
  // console.log(el.gym_name);
  return (
       
          <div className="near-gym-container">
          <div className="near-gym-free"></div>
          <div className="near-gym-details">
             <h1>{el.gym_name}</h1>
             <div color="grey"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
             <Flex gap={5}><Box>{el.address1}</Box><Box>{el.address2}</Box></Flex>
             <Flex gap={1}><Image width='5%' src='https://imgs.search.brave.com/WV54fs8l_Sd9xHGlbL1M0I-t0zF45czAhWDEn3-jYp0/rs:fit:800:566:1/g:ce/aHR0cHM6Ly9zdXBl/cmF3ZXNvbWV2ZWN0/b3JzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wMS9z/aW1wbGUtYmxhY2st/cGFwZXItcGxhbmUt/dmVjdG9yLWljb24t/ODAweDU2Ni5qcGc'/> <Box>{el.duration_text}</Box>|<Box>{el.distance_text}</Box></Flex>
             <br></br>
             <div className='book-now'><Button color='white' bg='#930809' _hover={'bg=#930809'} >Book Now</Button></div>
          </div>
        
        </div>
  )
}

export default NearGymList