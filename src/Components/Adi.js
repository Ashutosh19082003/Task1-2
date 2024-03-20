import React from 'react'
import './Adi.css'
import Doctor from '../../src/Assets/dr.png'
import global from '../../src/Assets/global.png'
const adi = () => {
  return (
    <div className='card-container'>
      <div className='card'>
      <img src={global} alt="" className='patient' />
        <div className='card-content'>
            <h3>card 1</h3>
            <a href="" className='btn'>Read more</a>
        </div>
      </div>
      <div className='card'>
      <img src={global} alt="" className='patient' />
        <div className='card-content'>
            <h3>card 1</h3>
            <a href="" className='btn'>Read more</a>
        </div>
      </div>
      <div className='card'>
      <img src={Doctor} alt="" className='patient' />
        <div className='card-content'>
            <h3>card 1</h3>
            <a href="" className='btn'>Read more</a>
        </div>
      </div>
      <div className='card'>
      <img src={Doctor} alt="" className='patient' />
        <div className='card-content'>
            <h3>card 1</h3>
            <a href="" className='btn'>Read more</a>
        </div>
      </div>
    </div>
  )
}

export default adi