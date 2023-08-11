import About from './components/about/About';
import Choose from './components/choose/Choose';
import Coaches from './components/coaches/Coaches';
import Hero from './components/hero/Hero';
import Schedule from './components/schedule/Schedule';
import Passes from './components/passes/Passes';
import Reviews from './components/reviews/Reviews';
import News from './components/news/News';
import Trial from './components/trial/Trial';
import GirlsImage from './components/girlsImage/GirlsImage';

export default function Main() {
  return (
    <>
      <Hero />
      <Choose />
      <About />
      <Coaches />
      <Schedule />
      <GirlsImage />
      <Passes />
      <Reviews />
      <News />
      <Trial />
    </>
  );
}
