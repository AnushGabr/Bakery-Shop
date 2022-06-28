import React from 'react'
import './CategoryItem.css'
import { Link, useNavigate } from 'react-router-dom'




const CategoryItem = ({category}) => {
  return (
    <div className='CategoryItem'>
          <h2>{category}</h2>
    </div>
  )
}

export default CategoryItem