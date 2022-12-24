import "./App.css";

import City from "./City";
import Description from "./Description";
import Footer from "./Footer";
import Temperature from "./Temperature";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="weather">
          <h1>Weather</h1>
          <Search />
          <div className="row">
            <div className="col-4">
              <City />
            </div>
            <div className="col-4">
              <Temperature />
            </div>
            <div className="col-4">
              <Description />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
