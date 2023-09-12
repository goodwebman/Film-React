import "./Nav.scss";

import "./Nav-media.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__block">
          <a href="/" className="logo">
            <div className="logo__svg">
              <img src="img/nav/logo/logo.svg" alt="" className="logo-svg" />
            </div>

            <div className="logo__text">
              <h1>
                <span>Kino</span>area
              </h1>
            </div>
          </a>

          <ul className="logo__list">
            <li className="logo__list-item">
              <a href="/" className="logo__list-item-link">
                Афиша
              </a>
            </li>

            <li className="logo__list-item">
              <a href="/" className="logo__list-item-link">
                Медиа
              </a>
            </li>

            <li className="logo__list-item">
              <a href="/" className="logo__list-item-link">
                Фильмы
              </a>
            </li>

            <li className="logo__list-item">
              <a href="/" className="logo__list-item-link">
                Актёры
              </a>
            </li>

            <li className="logo__list-item">
              <a href="/" className="logo__list-item-link">
                Новости
              </a>
            </li>

            <li className="logo__list-item">
              <a href="/" className="logo__list-item-link">
                Подборки
              </a>
            </li>

            <li className="logo__list-item">
              <a href="/" className="logo__list-item-link">
                Категории
              </a>
            </li>
          </ul>

          <div className="logo-btns">
            <button className="logo-btns__search">
              <img src="img/nav/icon/search.svg" alt="" />
            </button>

            <button className="logo-btns__come">Войти</button>
          </div>
        </div>

        <div className="container">
          <div className="nav__block-mobile">
            <button className="logo-btns__search">
              <img src="img/nav/icon/search.svg" alt="" />
            </button>

            <a href="/" className="logo">
              <div className="logo__svg">
                <img src="img/nav/logo/logo.svg" alt="" className="logo-svg" />
              </div>

              <div className="logo__text">
                <h1>
                  <span>Kino</span>area
                </h1>
              </div>
            </a>

            <button className="logo-btns__come">Войти</button>
          </div>

          <div className="nav-mobile">
            <ul className="logo__list">
              <li className="logo__list-item">
                <a href="/" className="logo__list-item-link">
                  Афиша
                </a>
              </li>

              <li className="logo__list-item">
                <a href="/" className="logo__list-item-link">
                  Медиа
                </a>
              </li>

              <li className="logo__list-item">
                <a href="/" className="logo__list-item-link">
                  Фильмы
                </a>
              </li>

              <li className="logo__list-item">
                <a href="/" className="logo__list-item-link">
                  Актёры
                </a>
              </li>

              <li className="logo__list-item">
                <a href="/" className="logo__list-item-link">
                  Новости
                </a>
              </li>

              <li className="logo__list-item">
                <a href="/" className="logo__list-item-link">
                  Подборки
                </a>
              </li>

              <li className="logo__list-item">
                <a href="/" className="logo__list-item-link">
                  Категории
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container container-small-mobile">
          <div className="mobile-nav-small">
            <div className="mobile-btns">
            <button className="mobile-burger menu-btn">
                <img src="img/nav/burger.svg" alt="" />
              </button>

              <div class="menu">
                <nav>
                  <ul>
                    <li>
                      <a href="#">Главная</a>
                    </li>
                    <li>
                      <a href="#">О нас</a>
                    </li>
                    <li>
                      <a href="#">Услуги</a>
                    </li>
                    <li>
                      <a href="#">Контакты</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <button className="mobile-search">
                <img src="img/nav/search.svg" alt="" />
              </button>
            </div>

            <div className="mobile-logo">
              <a href="/" className="logo">
                <div className="logo__svg">
                  <img
                    src="img/nav/logo/logo.svg"
                    alt=""
                    className="logo-svg"
                  />
                </div>

                <div className="logo__text">
                  <h1>
                    <span>Kino</span>area
                  </h1>
                </div>
              </a>
            </div>

            <button className="logo-btns__come logo-btns-mobile">Войти</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
