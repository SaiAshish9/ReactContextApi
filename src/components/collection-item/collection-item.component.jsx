import React,{useContext} from 'react';
// import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
// import { addItem } from '../../redux/cart/cart.actions';

import {CartContext} from '../../providers/cart'
import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

const {addItem}=useContext(CartContext)

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};
//
// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(CollectionItem);


export default CollectionItem
