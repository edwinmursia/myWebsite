import React from 'react'
import { ExperienceContainer, ExperienceWrapper, ContentWrapperOne, ContentWrapperTwo, TheLogo, TheName, TheDescription } from './ExperienceElements'

const Experience = ({img, name, description}) => {
    return (
        <ExperienceContainer>
            <ExperienceWrapper>
                <ContentWrapperOne>
                    <TheLogo src={img} />
                </ContentWrapperOne>
                <ContentWrapperTwo>
                    <TheName><h2 style={{color: '#01bf71'}} >{name}</h2></TheName>
                    <TheDescription><p>{description}</p></TheDescription>
                </ContentWrapperTwo>
            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default Experience
