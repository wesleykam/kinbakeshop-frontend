import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className='welcome'>
            <h1 className='kin'>K I N</h1>
            <h1 className='bakeshop'>B A K E S H O P</h1>
            <button className='menu-button'>MENU</button>
        </div>

        <div className='hours'>
            <h2>HOURS</h2>
            <p>
              <span className='bold'>Thursday</span>
              <span className='time'>9:30am - 4pm <em>(mochi + cafe + muffins)</em></span>
            </p>
            <p>
              <span className='bold'>Friday</span>
              <span className='time'> 9:30am - 4pm <em>(mochi + brioche + cafe + muffins)</em></span>
            </p>
            <p>
              <span className='bold'>Saturday</span>
              <span className='time'> 9:30am - 4pm <em>(mochi + brioche + cafe + muffins)</em></span>
            </p>
            <p>
              <span className='bold'>Sunday</span>
              <span className='time'> 10am - 3pm <em>(mochi + brioche + cafe + muffins)</em></span>
            </p>
            <p>
              <span className='bold'>Monday</span>
              <span className='time'> 9:30am - 4pm <em>(mochi + cafe + muffins)</em></span>
            </p>
            <p>
              <span className='bold'>Tuesday</span>
              <span className='time'> closed</span>
            </p>
            <p>
              <span className='bold'>Wednesday</span>
              <span className='time'> closed</span>
            </p>
        </div>
        
        <div className='instagram'>
            <h1>INSTAGRAM</h1>
            
        </div>
    </div>
  )
}

export default Home
