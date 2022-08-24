import React from 'react';
import { BannerCarousel, Categories, Footer, MainPromo, NavBar } from "./components";

const App = () => {
  return (
    <div>
      <NavBar />
        <BannerCarousel />
        <MainPromo/>
        <Categories/>
        <Footer/>
    </div >
  );
}

export default App;
