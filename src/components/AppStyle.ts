import {Link} from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 50px;
    background-color: purple;
    display: flex;
    flex-direction: column;`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    &:hover,
    &:focus {
        color: blue;
    }

    &:active {
        color: rgba(56, 58, 54, 0.78);
    }
`;

export const CleanButton = styled.button`
    color: #645cff;
    background-color: transparent;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    border: 1px solid #645cff;
    padding: 0.25rem;
    border-radius: 0.25rem;
    margin: 1rem auto;

    &:hover,
    &:focus {
        color: blue;
    }

    &:active {
        color: rgba(56, 58, 54, 0.78);
    }
`