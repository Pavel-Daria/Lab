import React, {FormEvent, useState} from 'react';
import styles from "./LoginForm.module.css"

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordRepeat, setPasswordRepeat] = useState("");

    const [passwordError, setPasswordError] = useState("");
    // const [passwordErrorRepeat, setPasswordErrorRepeat] = useState("");

    const isValid = (): boolean => {
        let result = true;
        setLoginError("");

        if (!/^([a-z0-9]{6,20})$/.test(login)) {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
            result = false;
        }
        if (login.length === 0) {
            setLoginError("Логин не может быть пустым.");
            result = false;
        }
        // setPasswordError("");
        //
        // setPasswordErrorRepeat("");
        // if(password !== passwordRepeat) {
        //     setPasswordErrorRepeat("Пароли не совпадают.");
        //     result = false;
        // }

        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым.");
            result = false;
        }
        return result;
    };



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isValid()){
        }
    };

    return (

        <div className="App">
            <h3>Логин</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Логин:
                        <input
                            value={login}
                            onChange={event => setLogin(event.target.value)}/>
                    </label>
                    {loginError && <div className={styles.error}>
                        {loginError}
                    </div>}
                </div>
                <div>
                    <label>
                        Пароль:
                        <input
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}/>
                    </label>
                    {passwordError && <div className={styles.error}>
                        {passwordError}
                    </div>}
                </div>

                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginForm;