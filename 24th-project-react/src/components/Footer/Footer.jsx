import './Footer.scss'

const Footer = () => {
    return ( 
        <section className="Footer">
            <div className="container">
                <div className="Footer-block">
                    <div className="Footer__social">
                        <img src="img/Footer/social.svg" alt="" />
                    </div>
                    
                    <ul className="Footer__nav">
                        <li className="Footer__nav-item">
                            <a href="/">
                                Афиша
                            </a>
                        </li>

                        <li className="Footer__nav-item">
                            <a href="/">
                                Новости
                            </a>
                        </li>

                        <li className="Footer__nav-item">
                            <a href="/">
                                Персоны
                            </a>
                        </li>

                        <li className="Footer__nav-item">
                            <a href="/">
                                Рейтинги
                            </a>
                        </li>

                        <li className="Footer__nav-item">
                            <a href="/">
                                Рецензии
                            </a>
                        </li>

                        <li className="Footer__nav-item">
                            <a href="/">
                                Каталог фильмов
                            </a>
                        </li>
                    </ul>

                    <div className="Footer__copyright">
                    2020 © Kinoarea.  Все права защищены
                    </div>

                    <div className="Footer__politic">
                        Политика конфиденциальности
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;