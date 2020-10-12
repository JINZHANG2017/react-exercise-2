import React, { Component } from 'react';
import img from '../assets/product_image_placeholder.png';

import PropTypes from 'prop-types';
class Item extends Component {
  render() {
    const { name, price } = this.props.value;
    return (
      <ul>
        <h3>{name}</h3>
        <img className="image-size" alt="" src={img}></img>
        <div>{price}</div>
        <button>add to cart</button>
      </ul>
    );
  }
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Item;
