import './Email.scss'

const Email = () => {
    return ( 
        <section className="Email">
            <div className="container">
                <div className="Email-block">
                    <div className="Email__logo">
                        <img src="img/Email/email-logo.svg" alt="" />
                        <p>Kinoarea</p>
                    </div>

                    <div className="Email__follow">
                    Подпишитесь на E-mail рассылку
                    </div>

                    <div className="Email__info">
                    Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку! 
                    </div>

                    <div className="Email__form-block">
                        <form className='email-form' action="/submit">
                            <input className='email-input' type="text" name="name" placeholder='Введите свой E-mail адрес' />
                            <input class='email-btn' type="submit" value="Подписаться" />
                        </form>
                    </div>

                    <div className="Email__check">
                        <form  className="check">
                            <label class="checkbox style-c">
                                <input type="checkbox" id='checkbox-email'/>
                                <div className="checkbox__checkmark"></div>
                                <label className='checkbox-label' for='checkbox-email'>Соглашаюсь на условия <span>политики конфиденциальности</span></label>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Email;