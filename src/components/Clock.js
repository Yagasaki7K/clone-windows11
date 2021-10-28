import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Clock = () => {
    const [timeState, setTimeState] = useState();
    const [dateState, setDateState] = useState();

    useEffect(() => {
        setInterval(() => {
            const timeStamp = new Date();
            let localeSpecificTime = timeStamp.toLocaleTimeString();
            setTimeState(localeSpecificTime.replace(/:\d+ /, ' '))
        }, 60000);
    }, [])

    useEffect(() => {
        setInterval(() => {
            const dateStamp = new Date();
            setDateState(dateStamp.toLocaleDateString());
        }, 60000);
    }, [])

    return (
        <>
            <WindowsClock>
                <div>{timeState}</div>
                <div>{dateState}</div>
            </WindowsClock>
        </>
    )
}

const WindowsClock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 15vw;
    cursor: default;

    div {
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        margin: 0.3vh 0;
    }
`

export default Clock
