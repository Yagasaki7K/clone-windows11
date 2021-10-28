import React from 'react'
import styled from 'styled-components'
import Admin from './Admin'
import Form from './Form'
import PinnedItem from './PinnedItem'
import RecomendItems from './RecomendItems'

const MenuTheme = () => {
    return (
        <>
            <Theme>
                <Container>
                    <Form/>
                    <PinnedItem/>
                    <RecomendItems/>
                </Container>
                <Admin/>
            </Theme>
        </>
    )
}

const Theme = styled.div`
    width: 47vw;
    height: auto;
    z-index: 2000;
    opacity: 1;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(0.7rem);
    box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
    border-radius: 0.345rem;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
`

const Container = styled.div``

export default MenuTheme
