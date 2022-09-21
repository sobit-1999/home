import { Box } from "@mui/material";
import "./App.css";
import AboutCompany from "./components/content/AboutCompany";
import BestOffers from "./components/content/BestOffers";
import Certificates from "./components/content/Certificates";
import Consultation from "./components/content/Consultation";
import Geolocation from "./components/content/Geolocation";
import HomeCard2 from "./components/content/HomeCard2";
import ImageCard from "./components/content/ImageCard";
import InstagramVideos from "./components/content/InstagramVideos";
import LastProperty from "./components/content/LastProperty";
import LatestNews from "./components/content/LatestNews";
import Reviews from "./components/content/Reviews";
import SpecialistsCarousel from "./components/content/SpecialistsCarousel";
import TariffsServices from "./components/content/TariffsServices";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
function App() {
  return (
    <>
    <Geolocation/>
      <Header />
      <ImageCard />
      <HomeCard2 />
      <Box sx={{marginX: '13%'}}>
        <LastProperty />
        <TariffsServices />
        <Consultation />
        {/* <Geolocation /> */}
        <BestOffers />
        <AboutCompany />
      </Box>
        <SpecialistsCarousel />
        
      <Box sx={{marginX: '13%'}}>
        <LatestNews />
        <Reviews />
        <Certificates />
        <InstagramVideos />
      </Box>
      <Footer />
    </>
  );
}

export default App;
