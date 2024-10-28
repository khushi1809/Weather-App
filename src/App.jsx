import { useState } from 'react'
import search from './assets/icons/search.svg'
import { useStateContext } from './components/Context';
import WeatherCard from './components/WeatherCard';
import { MiniCard } from './components/MiniCard';


function App() {
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  console.log(weather);

  const submitCity = () => {
    setPlace(input);
    setInput('');
  };

  return (
    <div className="w-full h-screen text-white px-8 flex justify-center items-start py-8">
      {/* Left Side: Search and Main Weather Card */}
      <div className="flex flex-col items-center gap-4">
        <div className="bg-[#204d88] w-[22rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem] filter invert" />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }}
            type="text"
            placeholder="Search for location..."
            className="focus:outline-none w-full text-white bg-[#204d88] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        
        {/* Main Temperature Card below the search input */}
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatIndex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
      </div>

      {/* Right Side: Forecast Cards with additional top margin */}
      <div className="grid grid-cols-3 gap-4 ml-8 mt-14">
        {values?.slice(1, 7).map((curr) => (
          <MiniCard
            key={curr.datetime}
            time={curr.datetime}
            temp={curr.temp}
            iconString={curr.conditions}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
