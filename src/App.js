import React, { useEffect, useState } from "react";
import "./App.css";
import Weathercard from "./components/Weathercard";
import Country from "./components/Country";
import axios from "axios";


const App = () => {
  const [latitude, setLatitude] = useState(24.8607);
  const [longitude, setLongitude] = useState(67.0011);
  const [info, setinfo] = useState([]);
  const [responseData, setResponseData] = useState();
  const [weatherImg, setWeatherImg] = useState();

  const REACT_APP_API = process.env.REACT_APP_api;

  useEffect(() => {
    handleGetApi()
    console.log("API WAS CALLED");
  },[latitude, latitude]);
  

  const handleGetApi = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,current,minutely,alerts&appid=${REACT_APP_API}&units=metric`
      )
      .then((response) => {
        console.log("response", response.data);
        //console.log("response", response.data.daily);

        setinfo(
          //Country: response.data.timezone,
          response.data.daily
        );
        setResponseData(
          //Country: response.data.timezone,
          response.data.timezone
        );
        setWeatherImg(
          response.data.daily[0].weather[0].main
        );
      })
      .catch((e) => {
        console.log(e, "error");
      });
  };

  console.log(info);
  console.log(responseData);
  console.log(weatherImg);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      window.alert(
        `Latitude: ${position.coords.latitude}  +  Longitude: ${position.coords.longitude}`
      );
    }
  };
  /* w-96 h-full bg-pink-700 */
  return (
    <div /* className="min-h-screen" */ className={weatherImg === "Clear" ? "bg-clear" : weatherImg === "Clouds" ? "bg-clouds" : weatherImg === "Snow" ? "bg-snow" : weatherImg === "Thunderstorm" ? "bg-thunderstorm" : weatherImg === "Rain" ? "bg-rain" : weatherImg === "Drizzle" ?  "bg-drizzle" : "bg-weatherLast" } >
      <div className="min-h-screen backdrop-blur-sm">
      {
        <div className="flex mb-4 overflow-scroll no-scrollbar overflow-y-hidden">
          {info.map((item, index) => (
            <Weathercard
              tempday={item.temp.day}
              tempnight={item.temp.night}
              num={index}
              weatherMainimg={item.weather[0].main}
              weatherMain={item.weather[0].main}
              key={item.temp + index}
            />
          ))}
        </div>
      }
      {
        <div className="flex justify-center items-center">
          <Country region={responseData} />
        </div>
      }
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center justify-center w-96">
          <h2 className="text-xl font-medium">Latitude</h2>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <h2 className="text-xl font-medium">Longitude</h2>
          <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div className="mb-0 py-2 flex flex-col justify-center items-center">
          <button
            onClick={handleGetApi}
            className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 mb-2 w-64 "
          >
            Search
          </button>
          <button
            onClick={getGeolocation}
            className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 mt-2 w-64"
          >
            Search by Your Location
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
