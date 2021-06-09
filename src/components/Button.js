import React from 'react'

export const Button = (props) => {
    let btnCss = `btn ${props.typeBtn} ${props.css}`
    return <button className={btnCss} onClick={props.clic}>{props.children}</button>
       
    
}
