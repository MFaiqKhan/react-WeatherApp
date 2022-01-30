import React from 'react';
import {WiCloudyGusts} from "react-icons/wi";
import {MdOutlineDarkMode} from "react-icons/md";
import {RiSunLine } from "react-icons/ri";
import {clear, cloudy, drizzle, rain, snow, thunderstorm, weatherLast} from './imports'

const Weathercard = ({tempday, tempnight , num, weatherMainimg, weatherMain}) => {
  return (
  <div className='gradient-bg-welcome shadow-lg w-72 h-96 p-0 cursor-pointer flex flex-col rounded justify-center items-center text-center bg-white/30 backdrop-blur-xl' >
    <div className='w-64 h-48 img'>
      { weatherMainimg === "Clear" ? <img src={clear} alt="clear" /> : weatherMainimg === "Snow" ? <img src={snow} alt="snow"/> : weatherMainimg === "Rain" ? <img src={rain} alt="rain" /> : weatherMainimg === "Clouds" ? <img src={cloudy} alt="cloudy" /> : weatherMainimg === "Drizzle" ? <img src={drizzle} alt="drizzle" /> : weatherMainimg === "Thunderstorm" ?  <img src={thunderstorm} alt="thunderstorm" /> : <img src={weatherLast} alt="clear2" /> }
    </div>
      <div className='p-0 m-0 flex flex-col w-64 h-64 items-center justify-center backdrop-blur-xl'>
        <div className='flex flex-row-reverse justify-start place-items-center items-center'> 
           <h1 className='h-12 flex justify-start items-center w-28 text-xl'>{weatherMain}</h1>
           <h1 className='w-16 h-12 flex items-center justify-start text-4xl'><WiCloudyGusts/></h1>
        </div>
           <h1 className='h-12 flex items-center justify-center text-slate-900 text-gradient text-xl'> {tempday}° <MdOutlineDarkMode/> | <RiSunLine/> {tempnight}° </h1>
           <h2 className='flex items-center justify-center text-slate-900'> Day {num} </h2>
      </div>
  </div>
  )
};

export default Weathercard;
