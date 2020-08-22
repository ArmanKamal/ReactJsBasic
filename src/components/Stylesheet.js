import React from 'react'
import '../css/Stylesheet.css'
import style from '../css/Stylesheet.module.css'

const Stylesheet = () =>
{
    let className = 'secondary'
    const inline = {fontSize: '15px',
                        color:'green'}
    return(
        <div>
           <h2 className='primary'>
                Style with normal css in react
            </h2>
            <p className={`${className} font-xl`}>Style with template Literal</p>
            <p style={inline}>Inline styling</p>
            <p className={style.success}>Style Module</p>
        </div>
      
    )
}

export default Stylesheet