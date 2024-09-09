import React from 'react';
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {

  const [cartItems, addToCart, removeFromCart] = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div class="food-item-img-container">
        <img className='food-item-image' src={image} alt='food-image' />
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
          : <div className='food-item-counter'>
              <img onClick = { () => removeFromCart(id) }  src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick = { () => addToCart(id) }  src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className='food-item-info'>
        <div class="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt='rating' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
