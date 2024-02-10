import React from 'react'
import "../Experiance/experiance.css"
import {BsPatchCheckFill} from "react-icons/bs"
function Experiance() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
<h2>My Experience</h2>
      <div className='container experience__containe'>

<div className=' container experience__container'>

<div className='experience__frontend'>
<h3>Frontend Development</h3>
<div className='experience__content'>
  <article className='experience__details'>
    <BsPatchCheckFill/>
    <div>
    <h4>HTML</h4>
    <small className='text-light'>Experienced</small>

    </div>

  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__icon'/>
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Experienced</small>
    </div>
   
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__icon'/>

    <div>
    <h4>Javascript</h4>
    <small className='text-light'>Experienced</small>
    </div>
  
  </article>
  {/* <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Bootstrap</h4>
    <small className='text-light'>Experienced</small>
    </div>

  </article> */}
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>React js</h4>
    <small className='text-light'>Experienced</small>
    </div>
   
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Mysql</h4>
    <small className='text-light'>Basic</small>
    </div>
   
  </article>
</div>



</div>
<div className='experience__backend'>
<h3>Frontend Frameworks and Technologies.</h3>

<div className='experience__content'>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Ant Design</h4>
    <small className='text-light'>Experienced</small>

    </div>

  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Bootstrap</h4>
    <small className='text-light'>Experienced</small>
    </div>
   
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>

    <div>
    <h4>Material UI</h4>
    <small className='text-light'>Experienced</small>
    </div>
  
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>PWA</h4>
    <small className='text-light'>Experienced</small>
    </div>

  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Github</h4>
    <small className='text-light'>Experienced</small>
    </div>
   
  </article>
</div>
</div>

</div>

      </div>
      
    </section>
  )
}

export default Experiance