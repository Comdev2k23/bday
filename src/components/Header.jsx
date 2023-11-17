import React from 'react'
import Pic1 from '../assets/pic1.png'
import Pic2 from '../assets/pic2.png'
import Pic3 from '../assets/pic3.png'
import Pic4 from '../assets/pic4.png'
import Pic5 from '../assets/pic5.png'
import Pic6 from '../assets/pic6.png'
const Header = () => {
  return (
    <div className='mx-auto shadow-lg'>
      <img src={Pic1}  />
      <img src={Pic2}  />
      <img src={Pic3} />
      <img src={Pic4}  />
      <img src={Pic5}  />
      <img src={Pic6} />
    </div>
  )
}

export default Header