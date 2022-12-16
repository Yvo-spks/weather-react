import Weather from './Weather';
import './App.css';

function App() {
  let weatherData ={
    city: "Paris",
    date: "Friday 4:41 ",
    description: "Clear Sky"
  };
  return (
    <div className="App">
      <div className="weather-demo-wrapper">
      <div className="weather-demo">  
      <header className="App-header">
        <h1>
          <ul>
            <li>{weatherData.city}</li>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
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
      </header>
      <Weather/>
      </div>
      </div>
    </div>
  );
}

export default App;
