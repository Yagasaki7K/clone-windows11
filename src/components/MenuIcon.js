import React from 'react'
import styled from 'styled-components'
import { IconMenuAPI } from '../API/IconSet'

const MenuIcon = () => {
    return (
        <>
            <NavIcons>
                {
                    IconMenuAPI && IconMenuAPI.map((value, index) => (
                            <button type="button" key={index}>
                                <img src={value.mIcon} alt="menu/icon"/>
                            </button>
                    ))
                }
            </NavIcons>
        </>
    )
}

const NavIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;

    button {
        outline: none;
        border: 1px solid transparent;
        background: transparent;
        padding: 0.55rem;
        margin: 0 0.05rem;
        opacity: 1;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(1rem);
            box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 255, 255, 0.1);
        }

        img {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: contain;
            filter: drop-shadow(0.5rem 0.5rem 1rem rgba(0,0,0,0.3));
            transition: all 500ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
            position: relative;
        }
    }
`

export default MenuIcon
