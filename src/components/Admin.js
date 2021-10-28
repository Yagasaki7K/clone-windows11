import React from 'react'
import styled from 'styled-components'
import PowerImage from '../images-src/windows-icon/powerButton.svg'

const Admin = () => {
    return (
        <div>
            <Wrap>
                <Avatar>
                    <img src="https://github.com/Yagasaki7K.png" alt="admin/img"/>
                    <p>Anderson Marlon</p>
                </Avatar>
                <PowerButton>
                    <a href="https://webessentials.com.br/">
                        <img src={PowerImage} alt="button/img"/>
                    </a>
                </PowerButton>
            </Wrap>
        </div>
    )
}

const Wrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    padding: 2vh 3rem;
    opacity: 1;
    z-index: 2000;
    border-radius: 0 0 0.345rem 0.345rem;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(0rem);
    box-shadow: 0 -0.1rem 0.5rem rgba(0, 0, 0, 0.1);
`

const PowerButton = styled.div`

    img {
        z-index: 1000;
        opacity: 1;
        width: 1.5rem;
        height: 1.5rem;
        object-fit: contain;
        filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3));
        transition: all 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0s;

        &:hover {
            transform: scale(1.2);
        }
    }
`

const Avatar = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    img {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
        border-radius: 50%;
        opacity: 1;
        transition: all 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0s;

        &:hover {
            transform: scale(1.2);
        }
    }

    p {
        margin-left: 20px;
    }
`

export default Admin
