import "./App.css";
import BtnClass from "./Components/BtnClass";
import Image from "./Components/Image";

function App() {
  return (
    <div className="App">
      <BtnClass myName="marco" />
      <Image myUrl="https://placekitten.com/300" myAlt="kitten" />
    </div>
  );
}

export default App;
