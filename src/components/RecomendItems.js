import React from 'react'
import styled from 'styled-components'

import { RecAPIOne, RecAPITwo, RecAPIThree} from '../API/IconSet'

const RecomendItems = () => {
    return (
        <>
            <Title>
                <div>
                    <h4>Recomended</h4>
                    <button type="button">All Apps <span>&#8250;</span></button>
                </div>
            </Title>

            <Wrap>
                <nav>
                    {
                        RecAPIOne && RecAPIOne.map((value, index) => {
                            return (
                            <div key={index}>
                                <img src={value.rIcon} alt="recomended/icon"/>
                                <p>{value.text}</p>
                            </div>
                            )
                        })
                    }
                </nav>
                <nav>
                    {
                        RecAPITwo && RecAPITwo.map((value, index) => {
                            return (
                            <div key={index}>
                                <img src={value.rIcon} alt="recomended/icon"/>
                                <p>{value.text}</p>
                            </div>
                            )
                        })
                    }
                </nav>
                <nav>
                    {
                        RecAPIThree && RecAPIThree.map((value, index) => {
                            return (
                            <div key={index}>
                                <img src={value.rIcon} alt="recomended/icon"/>
                                <p>{value.text}</p>
                            </div>
                            )
                        })
                    }
                </nav>
            </Wrap>
        </>
    )
}

const Wrap = styled.div`
    padding: 0 2rem;
    margin: 1vh 0 3vh 0;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        div {
            width: 15rem;
            height: 3rem;
            margin: 0.1vh 0;
            transition: all 250ms cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;

            &:hover {
                outline: none;
                border: none;
                background: transparent;
                border-bottom: 1px solid #000;
                filter: brightness(1);
                box-shadow: 0.1rem, 0.1rem, 0.5rem rgba(255, 255, 255, 0.2);
            }

            img {
                width: 2.3rem;
                height: 2.3rem;
                object-fit: contain;
                filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0,0,0,0.1));
            }

            p {
                font-size: 0.9rem;
                font-weight: 400;
                margin-top: 1vh;
                margin-left: 1rem;
            }
        }
    }
`

const Title = styled.div`
    padding: 0 2rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
            color: #000;
            font-weight: 500;
            line-height: 1.08;
            letter-spacing: 0.5px;
        }

        button{
            outline: none;
            border: none;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(0.1rem);
            box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
            padding: 0.5rem 0.7rem;
            border-radius: 0.245rem;
        }
    }
`

export default RecomendItems
