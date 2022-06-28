import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = ({products}) => {

    

  return (
    <div className='CategoryList'>
        {
            products.map(product => {

                return (
                  <div>
                  <CategoryItem key = {product.id} {...product}/>
                  </div>
                  
                ) 
            })
        }
    </div>
  )
}

export default CategoryList