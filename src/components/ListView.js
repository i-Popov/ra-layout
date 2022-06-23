import React from 'react';
import ShopItem from './ShopItem.js';
import PropTypes from 'prop-types';

export default function ListView(props) {
  const { items } = props;

  return (
    <div className="list-view">
      {items.map( (item, i) => <ShopItem key={i} items={item} />)}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};