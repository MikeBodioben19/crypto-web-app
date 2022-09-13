import React from 'react'
import './App.css'

import {Brand, CTA, Navbar} from './Components'
import {Blog, Features, WhatYGG3, Possibility, Footer, Header} from './Containers'

function App() {

  return (
    <div className="App bg-primary">
      <div className='bg-discount-gradient'>
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <WhatYGG3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>

  )
}

export default App
