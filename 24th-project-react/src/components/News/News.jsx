import './News.scss'

const News = () => {
    return ( 
        <section className="News">
            <div className="container">
                <div className="News-info">
                    <div className="News-info__title">
                        Последние новости
                    </div>

                    <div className="News-info__more">
                        <div className="News-info__more-text">
                            Все новости
                        </div>

                        <div className="News-info__more-arrow">
                            <img src="img/News/arrow-news.svg" alt="" />
                        </div>


                    </div>


                    
                </div>

                <div className="News-slides">
                        <div className="News-bond__block">
                            <div className="Bond-nav">
                                <div className="Bond-nav__date">
                                15 Апр 2020
                                </div>

                                <div className="Bond-nav__shows">
                                    <img src="img/News/eye.svg" alt="" />
                                    
                                    <p>242</p>
                                </div>

                                <div className="Bond-nav__message">
                                    <img src="img/News/message.svg" alt="" />
                                    <p>14</p>
                                </div>
                            </div>

                            <div className="Bond-footer">
                                <div className="Bond-footer__title">
                                Не время умирать. Перенос релиза фильма  
                                </div>

                                <div className="Bond-footer__info">
                            Но действия представителей оппозиции в равной
                             степени предоставлены сами себе.
                              В рамках спецификации современных стандартов,
                               стремящиеся вытеснить традиционное
                                производство, нанотехнологии указаны
                                как претенденты на роль ключевых факторов.
                            </div>
                        </div>


                        
                    </div>


                    <div className="Slide__blocks">
                            <a href='/' className="Slide__block slide-news-1">
                                <span className='slide-date'>
                                    15 Апр 2020
                                </span>

                                <span className='slide-hover'>
                                    Читать новость
                                </span>

                                <span className='slide-info'>
                                    Как изменили Соника с 
                                    последнего анонса 
                                </span>
                            </a>

                            <a href='/' className="Slide__block slide-news-2">
                                <span className='slide-date'>
                                    15 Апр 2020
                                </span>

                                <span className='slide-hover'>
                                    Читать новость
                                </span>

                                <span className='slide-info'>
                                    Самый скрытный агент
                                </span>
                            </a>

                            <a href='/' className="Slide__block slide-news-3">
                                <span className='slide-date'>
                                    15 Апр 2020
                                </span>

                                <span className='slide-hover'>
                                    Читать новость
                                </span>

                                <span className='slide-info'>
                                От этой новости вы будете
                                шокированы до завтра
                                </span>
                            </a>

                            <a href='/' className="Slide__block slide-news-4">
                                <span className='slide-date'>
                                    15 Апр 2020
                                </span>

                                <span className='slide-hover'>
                                    Читать новость
                                </span>

                                <span className='slide-info'>
                                    Вот это, конечно, да!
                                </span>
                            </a>
                    </div>
                </div>
                
            </div>
        </section>
     );
}
 
export default News;