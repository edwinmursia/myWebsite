import React from 'react'
import { QualitiesContainer, QualitiesH1, QualitiesWrapper, QualitiesCard, QualitiesIcon, QualitiesH2, QualitiesP, QualitiesBg, VideoBg } from './QualitiesElements'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import Matrix from '../../videos/matrix.mp4'

const Qualities = () => {
    return (
        <QualitiesContainer id='services'>
            <QualitiesBg>
                <VideoBg autoPlay loop muted src={Matrix} type='video/mp4' />
            </QualitiesBg>
            <QualitiesH1>My qualities</QualitiesH1>
            <QualitiesWrapper>
                <QualitiesCard>
                    <QualitiesIcon src={Icon1} />
                    <QualitiesH2>Fast learner</QualitiesH2>
                    <QualitiesP>I'm a fast learner and eager to always learn something new. </QualitiesP>
                </QualitiesCard>
                <QualitiesCard>
                    <QualitiesIcon src={Icon2} />
                    <QualitiesH2>Passion towards the work</QualitiesH2>
                    <QualitiesP>I always do my work with passion and as well as possible.</QualitiesP>
                </QualitiesCard>
                <QualitiesCard>
                    <QualitiesIcon src={Icon3} />
                    <QualitiesH2>Team player</QualitiesH2>
                    <QualitiesP>I get along well with everyone and offer help when needed.</QualitiesP>
                </QualitiesCard>
            </QualitiesWrapper>
        </QualitiesContainer>
    )
}

export default Qualities
