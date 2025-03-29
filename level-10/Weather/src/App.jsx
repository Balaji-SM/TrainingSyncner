import { use, useState,useEffect } from "react";
import "./App.css";
//imagess
import SearchIcon from './assets/search.png.png';
import CloudIcon from './assets/cloud.png.png';
import ClloudIron from './assets/—Pngtree—cloudy day_9803772.png';
import Sun from './assets/sun.png';


const Wetherdetails =({iCon ,temp,city,country})=>{
  return(
  <>
  <div className="image-sun">
  <img className="sun"src={iCon} alt="Sun" />
  </div>
  <div className="temp">{temp}°C</div>
  <div className="Location">{city}</div>
  <div className="Country">{country}</div></>
  )
}


function App(){
  let api_key="e7322461474cda160ca42f8f6e41de42";
  const [text,setText]=useState("Chennai");
  const [cityNotFound,setCityNotFounnd]=useState(false);
  const [loding,setLoding]=useState(false);
  const [iCon , setICon] = useState(CloudIcon);
  const [temp , setTemp] = useState();
  const [city,setCity]=useState("chennai");
  const [country,setCountry]=useState("India");

  const search = async ()=>{
    setLoding(true);

     let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;

      try{
       let res=await fetch(url);
       let data=await res.json();
       if(data.cod==="404"){
        console.log("city not found");
        alert("city not found");
        setCityNotFounnd(true);
        setLoding(false);
      
        return;
       }
       setTemp(Math.floor(data.main.temp));
       setCity(data.name);
       setCountry(data.sys.country);
       
      }catch(error){
       console.error("an error occurred",Error.message);
      }finally{
        setLoding(false);
      }
      
  }
  const handleCity=(e)=>{
   setText(e.target.value);
  };
  const handlekeyDown=(e)=>{
     if(e.key==="Enter"){
      search();
     }
   };
   useEffect(function (){
    search();
   },[]);
  return(
    <>
    <div className="container"> 
      <div className="in-container"> 
        <input className="city"
               type="text"
               name="search city"
               placeholder="Search city"
               onChange={handleCity}
               onKeyDown={handlekeyDown}
               value={text}
              />
              <div className="search" 
              onClick={()=>search()}>
                <img src={SearchIcon} alt="search" />
              </div>
      </div>
      <Wetherdetails iCon={iCon}
       temp={temp} 
       city={city}
       country={country} />
       <p className="p">Desgin By Balaji S</p>
    </div>
      
    </>
  )
}
export default App;