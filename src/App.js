import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import ScreenTwo from './Components/ScreenTwo/ScreenTwo';
import CarouselScreen from './Components/CarouselScreen/CarouselScreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <ScreenTwo/>
      <CarouselScreen/>
    </div>
  );
}

export default App;
