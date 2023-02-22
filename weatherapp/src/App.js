import hot from "./assets/hot.jpg";
import cold from "./assets/cold.jpeg";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${cold})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section sectionInputs">
            <input type="text" name="city" placeholder="Enter City..." />
            <button>°F</button>
          </div>
          {/* icondiv */}
          <div className="section sectionTemperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img
                src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                alt="weatherIcon"
              />
              <h3>cloudy</h3>
            </div>
            {/* temperatur div */}
            <div className="temperature">
              <h1>17 °C</h1>
            </div>
          </div>
          {/* bottom description */}
        </div>
      </div>
    </div>
  );
}

export default App;
