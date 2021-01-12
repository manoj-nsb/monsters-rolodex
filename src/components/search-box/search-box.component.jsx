import React from 'react'
import './search-box.styles.css'

export const  SearchBox=({placeHolder,handler})=>(
    <input
     className="search"
     type="search" 
     placeholder={placeHolder}
     onChange={handler} />

);

