import './BoxOffice.scss'

const BoxOffice = () => {
    return ( 
        <section className="BoxOffice">
            <div className="container">
                <div className="BoxOffice-block">
                    <div className="BoxOffice-info">
                        <div className="BoxOffice-info__text">
                            <div className="BoxOffice-info__text-title">
                                Кассовые сборы
                            </div>

                            <div className="BoxOffice-info__text-date">
                                13 марта — 15 марта
                            </div>
                        </div>

                        <div className="BoxOffice-line">
                            <img src="img/BoxOffice/box-line.svg" alt="" />
                        </div>

                        <ul className="BoxOffice-country">
                            <li className="BoxOffice-counry__item">
                                <a href="/">Россия</a>
                            </li>

                            <li className="BoxOffice-counry__item country-active">
                                <a href="/">Весь мир</a>
                            </li>

                            <li className="BoxOffice-counry__item">
                                <a href="/">
                                    США и Канада
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="BoxOffice-section__img">
                        <div className="BoxOffice-section__img-item">
                            <div className="BoxOffice-section__picture BoxOffice-img-1">
                            
                            </div>

                            <div className="BoxOffice-section__info">
                                <p className='BoxOffice-title'>
                                    1. Бладшот
                                </p>

                                <p className='BoxOffice-cost'>
                                    $13 млн
                                </p>

                                <p className='BoxOffice-cost-long'>
                                    $15.1 млн за 4 недели
                                </p>
                            </div>
                        </div>

                        <div className="BoxOffice-section__img-item">
                            <div className="BoxOffice-section__picture BoxOffice-img-2">
                            
                            </div>

                            <div className="BoxOffice-section__info">
                                <p className='BoxOffice-title'>
                                2. Вперёд
                                </p>

                                <p className='BoxOffice-cost'>
                                $6.8 млн
                                </p>

                                <p className='BoxOffice-cost-long'>
                                $41.4 млн за 4 недели
                                </p>
                            </div>
                        </div>

                        <div className="BoxOffice-section__img-item">
                            <div className="BoxOffice-section__picture BoxOffice-img-3">
                            
                            </div>

                            <div className="BoxOffice-section__info">
                                <p className='BoxOffice-title'>
                                3. Человек
                                -невидимка
                                </p>

                                <p className='BoxOffice-cost'>
                                $6.2 млн
                                </p>

                                <p className='BoxOffice-cost-long'>
                                $58.3 млн за 3 недели
                                </p>
                            </div>
                        </div>

                        <div className="BoxOffice-section__img-item">
                            <div className="BoxOffice-section__picture BoxOffice-img-4">
                            
                            </div>

                            <div className="BoxOffice-section__info">
                                <p className='BoxOffice-title'>
                                4. Соник в кино 
                                </p>

                                <p className='BoxOffice-cost'>
                                $2.9 млн
                                </p>

                                <p className='BoxOffice-cost-long'>
                                $15.1 млн за 4 недели
                                </p>
                            </div>
                        </div>

                        <div className="BoxOffice-section__img-item">
                            <div className="BoxOffice-section__picture BoxOffice-img-5">
                            
                            </div>

                            <div className="BoxOffice-section__info">
                                <p className='BoxOffice-title'>
                                5. Джентльмены
                                </p>

                                <p className='BoxOffice-cost'>
                                $1.8 млн
                                </p>

                                <p className='BoxOffice-cost-long'>
                                $78.7 млн за 11 недель
                                </p>
                            </div>
                        </div>
                    </div>

                </div>



                
            </div>
        </section>
     );
}
 
export default BoxOffice;