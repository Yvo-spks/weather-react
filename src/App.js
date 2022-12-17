import Weather from "./Weather"
import Search from "./Search";
import Forecast from "./Forecast";
import './App.css';

function App(props) {
  
  let weatherData ={
    city: "Paris",
    date: "Friday 4:41 ",
    description: "Clear Sky"
  };
  
  return (
    <div className="App">
      <div className="weather-demo-wrapper">
      <div className="weather-demo">  
      <Search/>
        <h1>
          <ul>
            <li className="data">{weatherData.city}</li>
            <li className="data">{weatherData.date}</li>
            <li className="data">{weatherData.description}</li>
          </ul>
        </h1>
        <h2>
          <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="icon"
              />
        </h2>
        <p className="temperature">
              <div className="float-right">
                <span className="units">
                  <a href="/" className="active">
                    {" "}
                    {props.temperature} ℃{" "}
                  </a>{" "}
                  |
                  <a href="/" className="active">
                    ℉
                  </a>
                </span>
              </div>
            </p>
            <h3>
              <ul>
                <li className="types">
                  Humidity: <span>{props.humidity}</span>%
                </li>
                <li className="types">
                  Wind: <span>{props.wind}</span>
                  km/h
                </li>
              </ul>
            </h3>
      
      <Weather/>
      <Forecast/>
      </div>
      </div>
    </div>
  );
}
 
export default App;
