import React, { useEffect, useState } from "react";
import { FaSun, FaCloud, FaSnowflake, FaCloudRain, FaSmog, FaCloudShowersHeavy, FaMoon } from 'react-icons/fa'; // Importação dos ícones
import HamburgerMenu from '../components/HamburgerMenu';

const API_KEY = "676562945a9df25ba516257ff67a9443";

function Clima() {
  const [climaData, setClimaData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.main) {
            setClimaData(data);
          }
        });
    });
  }, []);

  function getWeatherIcon(code) {
    switch (code) {
      case "01d": return <FaSun className="text-yellow-400 text-5xl"/>;
      case "01n": return <FaMoon className="text-blue-300 text-5xl"/>;
      case "02d":
      case "02n":
      case "03d":
      case "03n": return <FaCloud className="text-gray-400 text-5xl"/>;
      case "04d":
      case "04n": return <FaCloud className="text-gray-500 text-5xl"/>;
      case "09d":
      case "09n":
      case "10d":
      case "10n": return <FaCloudRain className="text-blue-400 text-5xl"/>;
      case "11d":
      case "11n": return <FaCloudShowersHeavy className="text-purple-500 text-5xl"/>;
      case "13d":
      case "13n": return <FaSnowflake className="text-blue-200 text-5xl"/>;
      case "50d":
      case "50n": return <FaSmog className="text-gray-400 text-5xl"/>;
      default: return <FaSun className="text-yellow-400 text-5xl"/>;
    }
  }

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center relative">
      <HamburgerMenu />
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 space-y-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Clima Atual</h1>
        {climaData ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <div className="text-lg font-medium">Temperatura:</div>
              <div className="flex items-center">
                <div className="text-3xl font-medium">{climaData.main.temp}</div>
                <div className="text-xl font-medium ml-2">°C</div>
              </div>
              {getWeatherIcon(climaData.weather[0].icon)}
            </div>
            <div className="text-xl">
              <span className="font-medium">Cidade:</span> {climaData.name}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Carregando dados do clima...</p>
        )}
      </div>
    </div>
  );
}

export default Clima;