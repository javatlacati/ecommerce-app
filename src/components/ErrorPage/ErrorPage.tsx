import React, {FC} from 'react';
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";


interface ErrorPageProps {
}

const ErrorPage: FC<ErrorPageProps> = () => (
    <div data-testid="ErrorPage">
        <HeaderMenu/>
        This page does not exist. Please go back to the home page.
    </div>
);

export default ErrorPage;
