import "./Expected.scss";

const Expected = () => {
  return (
    <section className="Expected">
      <div className="container">
        <div className="Expected__title">
          <div className="Expected__title-text">Ожидаемые новинки</div>

          <div className="Expected__title-btns">
            <button className="Expected-left-btn">
              <img src="img/Expected/arrow-news.svg" alt="" />
            </button>

            <p> 2 / 5 </p>

            <button className="Expected-right-btn">
              <img src="img/Expected/arrow-news.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="slider-container-expected">
          <div class="slider-expected">
            <div class="slide-popular-expected">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img expected-img-1">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  Побег из Претории
                </a>

                <a href="#!" className="Films-cards__genre">
                  14 мая 2020 в России
                </a>
              </div>
            </div>
            <div class="slide-expected">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img expected-img-2">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  Прощай
                </a>

                <a href="#!" className="Films-cards__genre">
                  14 мая 2020 в России{" "}
                </a>
              </div>
            </div>
            <div class="slide-popular">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img expected-img-3">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  Дружить по-русски!
                </a>

                <a href="#!" className="Films-cards__genre">
                  21 мая 2020 в России
                </a>
              </div>
            </div>
            <div class="slide-popular">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img expected-img-4">
                  <button className="card-btn__inner">Карточка фильма</button>
                </a>

                <a href="#!" className="Films-cards__title">
                  Приди ко мне
                </a>

                <a href="#!" className="Films-cards__genre">
                  21 мая 2020 в России
                </a>
              </div>
            </div>
            <div class="slide-popular">
              <div className="Films-cards__block">
                <a href="/" className="Films-cards__img expected-img-5">
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
        </div>
      </div>
    </section>
  );
};

export default Expected;
