import "./NewFilms.scss";
import "./media-NewFilms.scss";

const NewFilms = () => {
  return (
    <section className="NewFilms">
      <div className="container">
        <div className="Films">
          <nav className="Films-nav">
            <div className="Films-nav__title">Сейчас в кино</div>

            <div className="Films-nav__line">
              <img src="img/FirstView/Nav/line.svg" alt="" />
            </div>

            <ul className="Films-nav__list">
              <li className="Films-nav__item">
                <a href="#!" className="Films-nav__item-link nav__item-active">
                  Все
                </a>
              </li>

              <li className="Films-nav__item">
                <a href="#!" className="Films-nav__item-link">
                  Боевики
                </a>
              </li>

              <li className="Films-nav__item">
                <a href="#!" className="Films-nav__item-link">
                  Приключения
                </a>
              </li>

              <li className="Films-nav__item">
                <a href="#!" className="Films-nav__item-link">
                  Комедии
                </a>
              </li>

              <li className="Films-nav__item">
                <a href="#!" className="Films-nav__item-link">
                  Фантастика
                </a>
              </li>

              <li className="Films-nav__item">
                <a href="#!" className="Films-nav__item-link">
                  Триллеры
                </a>
              </li>

              <li className="Films-nav__item">
                <a href="#!" className="Films-nav__item-link">
                  Драма
                </a>
              </li>
            </ul>

            <div className="news-burger">
              <img src="img/News/news-menu.svg" alt="" />
            </div>
          </nav>

          <section className="Films-cards">
            <div className="Films-cards__block">
              <a href="/" className="Films-cards__img-1 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                Побег из Претории
              </a>

              <a href="#!" className="Films-cards__genre">
                Триллер
              </a>
            </div>

            <div className="Films-cards__block">
              <a href="/" className="Films-cards__img-2 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                Джокер
              </a>

              <a href="#!" className="Films-cards__genre">
                Триллер, драма, криминал
              </a>
            </div>

            <div className="Films-cards__block">
              <a href="/" className="Films-cards__img-3 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                Звёздные войны: Скайуокер. Восход
              </a>

              <a href="#!" className="Films-cards__genre">
                Фантастика, фэнтези, боевик, приключения
              </a>
            </div>

            <div className="Films-cards__block">
              <a href="/" className="Films-cards__img-4 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                Джентльмены
              </a>

              <a href="#!" className="Films-cards__genre">
                Боевик, комедия, криминал
              </a>
            </div>

            <div className="Films-cards__block">
              <a href="/" className="Films-cards__img-5 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                Ford против Ferrari
              </a>

              <a href="#!" className="Films-cards__genre">
                Биография, спорт, драма, боевик
              </a>
            </div>

            <div className="Films-cards__block">
              <a href="/" className="Films-cards__img-6 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                3022
              </a>

              <a href="#!" className="Films-cards__genre">
                Фантастика, триллер
              </a>
            </div>

            <div className="Films-cards__block">
              <a href="/" className="Films-cards__img-7 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                Хищные птицы: Потрясающая история Харли Квинн
              </a>

              <a href="#!" className="Films-cards__genre">
                Боевик, криминал, комедия
              </a>
            </div>

            <div className="Films-cards__block">
              <a href="/" className="Films-cards__img-8 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                Плохие парни навсегда
              </a>

              <a href="#!" className="Films-cards__genre">
                Боевик, комедия, криминал
              </a>
            </div>

            <div className="Films-cards__block cards__block-mobile">
              <a href="/" className="Films-cards__img-9 film-card-adaptive">
                <button className="card-btn__inner">Карточка фильма</button>
              </a>

              <a href="#!" className="Films-cards__title">
                История игрушек 4
              </a>

              <a href="#!" className="Films-cards__genre">
                Мультфильм, фэнтези, комедия, приключения
              </a>
            </div>

            <button className="arrow-up">
              <img src="img/FirstView/Cards/arrow-up.svg" alt="" />
            </button>
          </section>

          <div className="Films-button">
            <button className="Films-btn">Все новинки</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFilms;
