import "./App.css";
import HomeCard2 from "./components/content/HomeCard2";
import ImageCard from "./components/content/ImageCard";
import LastProperty from "./components/content/LastProperty";
import TariffsServices from "./components/content/TariffsServices";
import Header from "./components/header/Header";
import img from "./img/Grodna29 1.svg";
function App() {
  return (
    <>
      <Header />
      <ImageCard />
      <HomeCard2 />
      <div className="App">
      <LastProperty />
      <TariffsServices />

      </div>
    </>
  );
}

export default App;
