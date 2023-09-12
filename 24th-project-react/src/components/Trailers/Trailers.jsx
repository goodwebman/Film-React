import "./Trailers.scss";
import "./Media-Trailers.scss";

const Trailers = () => {
  return (
    <section className="Trailers">
      <div className="container">
        <div className="Trailers__section-block">
          <div className="Trailers-text">
            <div className="Trailers-title">Новые трейлеры</div>

            <a href="#!" className="Trailers-more">
              <div className="Trailers-more__text">Все трейлеры</div>

              <div className="Trailers-more__arrow">
                <img src="img/Trailers/arrow-right.svg" alt="" />
              </div>
            </a>
          </div>

          <div className="Trailers-video">
            <button className="Trailers-video__play">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              >
                <img className="play-trailers" src="img/Trailers/play.svg" alt="" />
              </a>
            </button>
          </div>

          <div className="Trailers-name-block">
            <div className="Trailers-name-block__info">
              <div className="Trailers-name__title">Форсаж 9</div>

              <div className="Trailers__social">
                <img src="img/Trailers/huyna.svg" alt="" />
              </div>

              <div className="Trailers__share">
                <img src="img/Trailers/share.svg" alt="" />
              </div>
            </div>

            <div className="Trailers-name__reviews">
              <div className="Trailers-review__like">
                <button className="Trailers-review__like-btn">
                  <img src="img/Trailers/like.svg" alt="" />
                </button>

                <div className="Trailers-review__like-score">3 245</div>
              </div>

              <div className="Trailers-review__dislike">
                <button className="Trailers-review__dislike-btn">
                  <img src="img/Trailers/dislike.svg" alt="" />
                </button>

                <div className="Trailers-review__dislike-score">420</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailers;
