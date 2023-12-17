import React from 'react'
import "./Mylogin.css"
import { loginUrl } from './spotify';

export const Mylogin = () => {
  return (
    <div className='login'>
        <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}
