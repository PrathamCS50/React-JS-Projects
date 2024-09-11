import logo from "./logo.svg";
import "./App.css";
import Accordian from "./Components/Accordian/index";
import RandomColor from "./Components/Random-color";
import StarRating from "./Components/Star-Rating/StarRating";

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
