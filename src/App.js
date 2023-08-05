import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import ScreenTwo from './Components/ScreenTwo/ScreenTwo';
import CarouselScreen from './Components/CarouselScreen/CarouselScreen';
import BannerTwo from './Components/BannerTwo/BannerTwo';
import ScreenThree from './Components/ScreenThree/ScreenThree';
import ScreenFour from './Components/ScreenFour/ScreenFour';
import Articles from './Components/Articles/Articles';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <ScreenTwo/>
      <CarouselScreen/>
      <BannerTwo/>
      <ScreenThree/>
      <ScreenFour/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
