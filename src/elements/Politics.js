import React from "react";

const Politics = () => {
    return (
        <div className="form-group politics">
            Нажимая "Войти" или "Регистрация" вы соглашаетесь с{' '}
            <a href="https://www.insightestate.com/privacy"
               target="_blank"
               className="button"
            >
                политикой обработки данных
            </a>
        </div>
    )
}

export default Politics;
