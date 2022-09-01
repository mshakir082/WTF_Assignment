import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import "./gym.css";
import FitnessGym from "./FitnessGym";
import GymMain from "./GymMain";

const GymHeader = () => {
  return (
    <>
      <div className="container">
        <img src='GymFooter.png'/>
      </div>
     <div className='Input-container'>
      <div className="inputDiv">
        <img src='https://imgs.search.brave.com/6fOTh2mXH3i_BdTZJnuWKuB-Q3i_GQBNvNC4obI5QCg/rs:fit:600:598:1/g:ce/aHR0cHM6Ly93d3cu/Y2xrZXIuY29tL2Ns/aXBhcnRzLzkvVC8y/L2gvWC83L3NlYXJj/aC1pY29uLWhpLnBu/Zw' />
         <input  placeholder="Search gym name here..." />
          <Box cursor={'pointer'} color='white' width='5%'height='80%' mt='5px' ><Image bg='#930809'  borderRadius={'10px'} width='100%' padding='0.4rem 0.9rem' src='https://imgs.search.brave.com/1XkeTeOq2LqG48a2DxciXKldJMpZci7GM4u-yLBSsAw/rs:fit:674:980:1/g:ce/aHR0cHM6Ly93ZWJz/dG9ja3Jldmlldy5u/ZXQvaW1hZ2VzL2Ns/aXBhcnQtbWFwLWxv/Y2F0aW9uLXNpZ24t/MTIucG5n'/></Box>
          <Button bg='#930809' mt='5px' height='80%' color="white" width='12%' ml='12px' fontSize='18px' _hover={'bg=#930809'}>Clear</Button>
      </div>
      </div>
      <GymMain/>
      <FitnessGym/>
    </>
  );
};

export default GymHeader;
