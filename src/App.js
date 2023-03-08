
import './App.css';
import HeroHeader from './components/HeroHeader';
import About from './components/About';
import Attribution from './components/Attribution';
import { useEffect, useState } from 'react';

function App() {
  // This is for add a preloader, also de index.html.
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const loaderElement = document.querySelector(".container");
  //   if (loaderElement) {
  //     setTimeout(() => {
  //       loaderElement.remove();
  //       setIsLoading(false);
  //     }, 2000)
  //   }
  // })
  

  return (
    // !isLoading &&
    <div className="App md:text-base text-sm font-league font-medium min-h-screen box-border
    grid lg:grid-cols-homePageLayout lg:grid-rows-homePageLayout md:grid-rows-[100vh_100vh]
    grid-cols-1 grid-rows-homePageLayoutMobile" >
      <HeroHeader />
      <About />
      <Attribution />
    </div>
  );
}

export default App;
