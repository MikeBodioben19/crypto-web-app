import React from 'react'

import styles, {layout} from '../styles'
import { robot } from '../assets'

const Header = () => {
  return (
    <section id='home' className={`${layout.paddingF} flex w-full flex-col ss:flex-row`}>
      <div className='header__content flex-1 flex px-4 flex-col items-center justify-center w-full md:items-start'>
        <h1 className="text-gradient font-bold text-3xl ss:text-4xl md:text-5xl w-full ">
          Let's Build Something amazing with YYG-3 OpenAI
        </h1>
        <p className='text-colorText text-md md:text-lg font-medium mt-6 '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem id nisi deserunt illum neque architecto totam ratione.   Consequatur neque corporis eaque quibusdam culpa.
        </p>
        <div className={`header__content-input w-full mt-8 mb-4 flex`}>
          <input type="email" placeholder='Your Email Address' className='flex-[2] w-full text-white outline-none px-4 min-h-[50px] text-sm ss:text-md font-medium rounded-tl-md rounded-bl-md md:text-lg ' style={{backgroundColor : "#052d56"}} />
          <button type='button' className='bg-colorOrange text-white font-bold text-sm ss:text-md min-h-[50px] w-full flex-[0.6] outline-none rounded-tr-md rounded-br-md px-4 md:text-lg'> Get Started</button>
        </div>

      </div>
        <div className={`header__content-image w-full flex-[1] $  {styles.flexCenter} `}>
          <img src={robot} alt="robot" className='w-full h-full ' />
        </div>
    </section>
  )
}

export default Header