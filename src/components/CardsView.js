import React from 'react';
import ShopCard from './ShopCard.js';
import PropTypes from 'prop-types';

export default function CardsView(props) {
  const { cards } = props;

  return (
    <div className="cards-view">
      {cards.map( (item, i) => <ShopCard key={i} items={item} />)}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};
