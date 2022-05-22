import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequatur iusto dignissimos, alias dolorum minima quod. Blanditiis
            maxime assumenda eius delectus odit minima, repellendus rerum fugiat
            atque enim modi itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            temporibus ratione voluptatibus minus animi nesciunt quis dolorum
            ipsum a perferendis voluptatem quos laudantium omnis repudiandae
            saepe, dolore soluta vel? Hic.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            officiis repellendus asperiores, earum eius obcaecati sit non
            quibusdam nesciunt ducimus modi ea ad quas nobis itaque dolore hic.
            Provident, delectus.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face3">
              <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face1">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDatabase} color="#00758f" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default About
