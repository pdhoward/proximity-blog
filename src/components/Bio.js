import React from 'react'
import styles from './Bio.module.css'
import logo from '../assets/icon-512x512.png'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  /*
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })
  */

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={logo} alt="SM" />
      <p>
        Engage Your 'Audience of One' at the Point of Decision
        <hr/>       
        For more information, please contact {' '}
        <a href="https://twitter.com/StrategicMachi1/">
          Strategic Machines
        </a>        
      </p>
    </div>
  )
}

export default Bio
