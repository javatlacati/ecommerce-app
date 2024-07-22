import React, {FC} from 'react';
import {Form, useSubmit} from 'react-router-dom'

interface LoginProps {
}

const Login: FC<LoginProps> = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submit = useSubmit();
    let modifyForm = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('Form submitted', {email, password});
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    return (
        <div data-testid="Login">

            <Form method="post" onChange={modifyForm} onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" value={email} onChange={handleEmailChange} type="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" value={password} onChange={handlePasswordChange} type="password" required/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </Form>
        </div>
    );
};

export default Login;
