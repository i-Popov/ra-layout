import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem(props) {
  const { name, price, color, img } = props.items;

  return (
    <div className="item">
      <img src={img} alt={`${name}-${color}`} />
      <h2 className="name">{name}</h2>
      <span className="color">{color}</span>
      <span className="price">${price}</span>
      <span className="button">Add to cart</span>
    </div>
  );
}

ShopItem.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
  }),
};