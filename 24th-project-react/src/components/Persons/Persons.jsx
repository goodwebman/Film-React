import './Persons.scss'

const Persons = () => {
    return ( 
        <section className="Persons">
            <div className="container">
                <div className="Persons-block">
                    <div className="Persons__text">
                        <div className="Persons__title">
                            Популярные персоны
                        </div>

                        <div className="Persons__time">
                            <a href="/" className="Persons__time-item">За год</a>
                            <a href="/" className="Persons__time-item">За месяц</a>
                            <a href="/" className="Persons__time-item time-active">За неделю</a>
                        </div>
                    </div>


                    <div className="Persons__img">
                        <div className="Persons__img-left">
                            
                            <span className="Person__name">
                                Квентин Тарантино
                            </span>

                            <span className="Person__name-eng">
                                Quentin Tarantino
                            </span>

                            <span className="Person__year">
                                57 лет
                            </span>
                        </div>

                        <div className="Persons__img-right">

                            <img src="img/Persons.tarantino" alt="" />
                            <span className="Person__name">
                                Джейсон Стетхэм
                            </span>

                            <span className="Person__name-eng">
                                Jason Statham
                            </span>

                            <span className="Person__year">
                                52 года
                            </span>
                        </div>

                        <ul className="Persons__list">
                            <div className="container-persons">
                                <li className="Persons__list-item">
                                    <div className="Persons__list-info">
                                        <div className="Persons__list-name">
                                            Тинто Брасс


                                        </div>

                                        <div className="Persons__list-name-eng">
                                            Tinto Brass
                                        </div>

                                        <div className="Persons__list-year">
                                            87 лет
                                        </div>
                                    </div>

                                    <div className="Persons__list-top">
                                        3-е место
                                    </div>
                                </li>

                                <li className="Persons__list-item">
                                <div className="Persons__list-info">
                                    <div className="Persons__list-name">
                                    Джеки Чан


                                    </div>

                                    <div className="Persons__list-name-eng">
                                    Jackie Chan
                                    </div>

                                    <div className="Persons__list-year">
                                        66 лет
                                    </div>
                                </div>

                                <div className="Persons__list-top">
                                    4-е место
                                </div>
                            </li>

                            <li className="Persons__list-item">
                                <div className="Persons__list-info">
                                    <div className="Persons__list-name">
                                    Том Харди


                                    </div>

                                    <div className="Persons__list-name-eng">
                                    Tom Hardy
                                    </div>

                                    <div className="Persons__list-year">
                                    42 года
                                    </div>
                                </div>

                                <div className="Persons__list-top">
                                    5-е место
                                </div>
                            </li>

                            <li className="Persons__list-item">
                                <div className="Persons__list-info">
                                    <div className="Persons__list-name">
                                    Акшай Кумар


                                    </div>

                                    <div className="Persons__list-name-eng">
                                    Akshay Kumar
                                    </div>

                                    <div className="Persons__list-year">
                                    52 года
                                    </div>
                                </div>

                                <div className="Persons__list-top">
                                    6-е место
                                </div>
                            </li>
                            </div>

                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Persons;