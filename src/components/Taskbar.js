import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import Clock from './Clock'
import MenuIcon from './MenuIcon'
import StatusIcon from './StatusIcon'
import MenuTheme from './MenuTheme'

const Taskbar = () => {

    const [MenuState, setMenuState] = useState(false)
    const isStartMenuOpen = () => setMenuState(!MenuState)

    return (
        <>
            <Wrap>
                <MenuBottom>
                    <button type="button" onClick={isStartMenuOpen}>
                        <img src="/images/windows-icon/startIcon.png" alt="Start Windows"/>
                    </button>
                </MenuBottom>
                <MenuIcon/>
                <StatusIcon/>
                <Clock/>
            </Wrap>

            <StartMenu ifMenuActive={MenuState}>
                <MenuTheme />
            </StartMenu>
        </>
    )
}

const Wrap = styled.section`

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    opacity: 1;
    z-index: 2000;

    backdrop-filter: blur(0.5rem);
    background: rgb(16, 45, 95, 0.3);
    color: #e5e5e5;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

const MenuBottom = styled.div`

    display: flex;
    align-items: center;
    width: 80%;
    justify-content: flex-end;
    flex-direction: row;

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

const StartMenu = styled.div`
    position: absolute;
    left: 26vw;
    bottom: 6vh;
    opacity: 1;
    z-index: 2000;
    transition: all 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;

    opacity: ${event => event.ifMenuActive ? '1' : '0'};
    visibility: ${event => event.ifMenuActive ? 'visible' : 'hidden'};
    transform: ${event => event.ifMenuActive ? 'translateY(0)' : 'translateY(100%)'};
`

export default Taskbar
