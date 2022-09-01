import React,{useEffect,useState} from "react";
import "./gym.css";
import { Input, Select,Box ,Image} from "@chakra-ui/react";
import NearGymList from './NearGymList'
import axios from "axios"
const GymMain = () => {

  let [nearestGym,setNearestGym]=useState([]);
  let [placesGym,setplacesGym]=useState([]);

    useEffect(()=>{
      fetch('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
      .then(res=>res.json())
      .then(el=>setNearestGym(el.data))
    },[]);
    const handelChange=(value)=>{
      
      setplacesGym(value)
    }
     useEffect(()=>{
      
      if(placesGym=='noida'){
        fetch(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${placesGym}`)
        .then(res=>res.json())
        .then(el=>setNearestGym(el.data))
      }else{
        fetch(`https://devapi.wtfup.me/gym/nearestgym?lat=28.613939&long=77.209021&city=noida`)
        .then(res=>res.json())
        .then(el=>setNearestGym(el.data))
      }
    },[placesGym]);
  
  return (
    <div className="filter-box">
      <div className="filter-title">
        <h2>Filters</h2>
        <div className="location">
          <p>Location</p>
          <Box width={"75%"} border='1px solid #FFFEFE' borderRadius='10px' display='flex'>
          <Image width={"10%"} height={'40%'} m='10px' src='https://imgs.search.brave.com/6fOTh2mXH3i_BdTZJnuWKuB-Q3i_GQBNvNC4obI5QCg/rs:fit:600:598:1/g:ce/aHR0cHM6Ly93d3cu/Y2xrZXIuY29tL2Ns/aXBhcnRzLzkvVC8y/L2gvWC83L3NlYXJj/aC1pY29uLWhpLnBu/Zw' />
          <Input width={"80%"} height={"50px"} border='none' outline='none' placeholder="Enter Location" />
          </Box>
        </div>
        <div className="price-tag">
          <p>Price</p>
          <Input
            width={"25%"}
            marginRight={"10px"}
            placeholder="Min"
            height={"50px"}
            bg='#2E2F2F'
            fontSize='20px'
          />
          <Input width={"25%"} height={"50px"} bg='#2E2F2F' placeholder="Max"fontSize='20px' />
        </div>
        <div className="cities-selectDiv">
          <p>Cities</p>
          <select className="cities-select"
               placeholder="Select Cities" onChange={(e)=>handelChange(e.target.value)}>
            <option  value="new delhi">New Delhi</option>
            <option value="gaziabad">Gaziabad</option>
            <option value="greater noida">Greater Noida</option>
            <option value="noida">Noida</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>
      </div>
      <div className="near-gym-list">
        {nearestGym && nearestGym?.map((el)=>(
        <div key={el.user_id}>
            <NearGymList el={el}/>
        </div>
      ))}
      </div>
    
        
      
    </div>
  );
};

export default GymMain;
