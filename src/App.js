
import './App.css';
import HeroHeader from './components/HeroHeader';
import About from './components/About';
import Attribution from './components/Attribution';

function App() {
  return (
    <div className="App md:text-base text-sm font-league font-medium min-h-screen box-border
    grid lg:grid-cols-homePageLayout lg:grid-rows-homePageLayout md:grid-rows-[100vh_100vh]
    grid-cols-1 grid-rows-homePageLayoutMobile">
      <HeroHeader />
      <About />
      <Attribution />
    </div>
  );
}

export default App;
