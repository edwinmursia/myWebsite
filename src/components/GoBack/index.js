import React from 'react'
import { GoBackContainer, GoBackWrapper, TheLogo, TheText } from './GoBackElements'
import {RiArrowLeftSLine} from 'react-icons/ri'

const GoBack = () => {
    return (
        <GoBackContainer>
            <GoBackWrapper to="/">
                <TheLogo>
                    <RiArrowLeftSLine />
                </TheLogo>
                <TheText>
                    <h1>Back to main screen</h1>
                </TheText>
            </GoBackWrapper>
        </GoBackContainer>
    )
}

export default GoBack
