import React from 'react'
import styled from 'styled-components'

const Desktop = () => {
    return (
        <>
            <Background>
                <video autoPlay={true} Loop={false} muted={true} playsInline={true}>
                    <source src="/images/video.webm"/>
                </video>
            </Background>
        </>
    )
}

const Background = styled.main`
    background: url('/images/windows-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    position: relative;
    opacity: 1;
    z-index: 1500;
    overflow: hidden;

    video {
        width: 100%;
        height: auto;
        object-fit: cover;
        pointer-events: none;
    }
`

export default Desktop
