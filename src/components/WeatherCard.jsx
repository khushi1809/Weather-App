import React, { useState } from "react";
import {useDate} from '../components/UseDate.jsx';
import sun from '../assets/icons/Sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png';
import '../index.css'
import { useEffect } from 'react';

const WeatherCard = ({
    temperature,
    windspeed,
    humidity,
    place,
    heatIndex,
    iconString,
    conditions,
}) => {

    const [icons,setIcon] = useState(sun);
    const {time} = useDate();

    useEffect(() => {
        if (iconString) {
          if (iconString.toLowerCase().includes('cloud')) {
            setIcon(cloud)
          } else if (iconString.toLowerCase().includes('rain')) {
            setIcon(rain)
          } else if (iconString.toLowerCase().includes('clear')) {
            setIcon(sun)
          } else if (iconString.toLowerCase().includes('thunder')) {
            setIcon(storm)
          } else if (iconString.toLowerCase().includes('fog')) {
            setIcon(fog)
          } else if (iconString.toLowerCase().includes('snow')) {
            setIcon(snow)
          } else if (iconString.toLowerCase().includes('wind')) {
            setIcon(wind)
          }
        }
      }, [iconString])
    return (
        <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
            <div className="flex w-full just-center gap-4 mt-12 mb-4">
                <img className="w-23 h-20" src={icons} alt="weather_icon" />
                <p className="font-bold text-5xl flex justify-center items-center">{temperature} &deg;C</p>
            </div>
            <div className="font-bold text-center text-xl">
                {place}
            </div>
            <div className="w-full flex justify-between items-center mt-4">
                <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
                <p className="flex-1 text-center p-2">{time}</p>
            </div>
            <div className="w-full flex justify-between items-center mt-4 gap-4">
                <p className="flex-1 text-center p-2 font-bold bg-[#204d88] shadow rounded-lg ">Wind Speed <p className="font-normal">{windspeed}</p></p>
                <p className="flex-1 text-center p-2 font-bold rounded-lg bg-[#aac6e8]"> <span style={{ color: '#204d88' }}>Humidity</span> <p className="font-normal"><span style={{ color: '#204d88' }}>{humidity}</span></p></p>
            </div>
            <div className="w-full p-3 mt-4 flex justify-between items-center">
                <p className="font-semibold text-lg">Heat Index</p>
                <p className="text-lg">{ heatIndex? heatIndex : 'N/A'}</p>
            </div>
            <hr className="bg-slate-600"/>
            <div className="w-full p-4 flex justify-center items-center text-2xl font-semibold">
                {conditions}
            </div>
        </div>
    )
}



export default WeatherCard;