import "./Popular.scss";
import "./popular-slider.js";

const Popular = () => {
  return (
    <section className="Popular">
      <div className="container">
        <div className="Popular-block">
          <div className="Popular-text">
            <div className="Popular-text__title">Популярные фильмы</div>

            <div className="Popular-text__line">
              <img src="img/Popular/popular-line.svg" alt="" />
            </div>

            <ul className="Popular-text__list">
              <li className="Popular-text__list-item">
                <a href="/">Всё время</a>
              </li>

              <li className="Popular-text__list-item">
                <a href="/">2020</a>
              </li>

              <li className="Popular-text__list-item ">
                <a className="list-item-active" href="/">
                  2019
                </a>
              </li>

              <li className="Popular-text__list-item">
                <a href="/">2018</a>
              </li>

              <li className="Popular-text__list-item">
                <a href="/">2017</a>
              </li>

              <li className="Popular-text__list-item">
                <a href="/">2016</a>
              </li>

              <li className="Popular-text__list-item">
                <a href="/">2015</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="slider-container-popular">
          <div class="slider-popular">
            <div class="slide-popular-popular">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img-2">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  Звёздные войны: Скайуокер. Восход
                </a>

                <a href="#!" className="Films-cards__genre">
                  Фантастика, фэнтези, боевик, приключения
                </a>
              </div>
            </div>
            <div class="slide-popular">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img-9">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  История игрушек 4
                </a>

                <a href="#!" className="Films-cards__genre">
                  Мультфильм, фэнтези, комедия, приключения
                </a>
              </div>
            </div>
            <div class="slide-popular">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img-10">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  Однажды в… Голливуде
                </a>

                <a href="#!" className="Films-cards__genre">
                  Драма, комедия
                </a>
              </div>
            </div>
            <div class="slide-popular">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img-11">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  Солнцестояние
                </a>

                <a href="#!" className="Films-cards__genre">
                  Ужасы, триллер, драма
                </a>
              </div>
            </div>
            <div class="slide-popular">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img-2">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  Звёздные войны: Скайуокер. Восход
                </a>

                <a href="#!" className="Films-cards__genre">
                  Фантастика, фэнтези, боевик, приключения
                </a>
              </div>
            </div>
          </div>
          <div class="controls">
            <button class="prev-btn">
              <img src="img/Popular/arrow-slider.svg" alt="" />
            </button>

            <div class="counter">4 / 5</div>

            <button class="next-btn">
              <img src="img/Popular/arrow-slider.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
