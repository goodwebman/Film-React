import './_reset.scss';
import './_base.scss';

import Nav from '../Nav/Nav'
import NewFilms from '../NewFilms/NewFilms';
import Trailers from '../Trailers/Trailers';
import FilmSlider from '../FilmSlider/FilmSlider';
import Popular from '../Popular/Popular';
import Persons from '../Persons/Persons';
import News from '../News/News';
import Expected from '../Expected/Expected';
import BoxOffice from '../BoxOffice/BoxOffice';
import Email from '../Email/Email';
import Footer from '../Footer/Footer';



function App() {
  return (
    <div>
      {/* <section className='FirstView'> */}
        {/* <Nav />
        <NewFilms /> */}
      {/* </section> */}
        <Trailers />
        {/* <FilmSlider />
        <Popular />
        <Persons />
        <News />
        <Expected />
        <BoxOffice />
        <Email />
        <Footer /> */}
      
    </div>
  );
}

export default App;
