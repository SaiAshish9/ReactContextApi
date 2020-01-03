import React,{useContext} from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
// import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {CartContext} from '../../providers/cart'



import './cart-dropdown.styles.scss';

const CartDropdown = ({  history }) => {


const { cartItems,toggleHidden } =useContext(CartContext)

  return(


    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
      toggleHidden()
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>

  )

};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });
// connect(mapStateToProps)(CartDropdown)
export default withRouter(CartDropdown);
