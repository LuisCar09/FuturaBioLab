import { useEffect, useState } from "react"

const ItemCart = ({ name, setSubTotal ,price }) => {
  const [counter,setCounter ] = useState(1)
  
  
  const increment = () => {
    
    
    setCounter(counter + 1)
    
    setSubTotal(prev => {
      return prev + parseFloat(price)
    })
  }
  const decrement = () => {
    
    
    counter > 1 ? setCounter(counter - 1) : setCounter(1)
    
    setSubTotal(prev => {
      return prev - parseFloat(price)
    })
  }
  
  
  return (
    <article className='products-mycart'>
      <div className='product-details-mycart'>
        <h3>{name}</h3>
        <div className='img-products-mycart'>

          <div className='buttons-mycart'>
            <button className='buttonproduct-mycart'  onClick={decrement} >-</button>
            <p>{counter}</p>
            <button className='buttonproduct-mycart' onClick={ increment} >+</button>
          </div>

        </div>

      </div>
    </article>
  )
}
export default ItemCart