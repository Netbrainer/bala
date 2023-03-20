import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./css/Assessment.css"
function Assessment() {
  return (
    <div>
        <Navbar/>
        <div className='fl_cont'>
            <div>
                <p>Biology papers</p>
    
            </div>
            <div>
            <p>Physics papers</p>
            </div>
            <div>
            <p>Chemistry papers</p>
            </div>
            <div>
            <p>Maths papers</p>
            </div>
            <div>
            <p>English papers</p>
            </div>
            <div>
            <p>Kiswahili papers</p>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Assessment