import React, { Component } from 'react';
import Item from './Item';

class Store extends Component {
  state = {
    products: [
      {
        category: 'iPhone',
        price: '￥5999',
        name: 'iPhone11',
      },
      {
        category: 'iPhone',
        price: '￥5399',
        name: 'iPhoneXS',
      },
      {
        category: 'iPhone',
        price: '￥3599',
        name: 'iPhoneSE',
      },
      {
        category: 'HUAWEI',
        price: '￥7999',
        name: 'HUAWEI P40 Pro+',
      },
      {
        category: 'HUAWEI',
        price: '￥5000',
        name: 'HUAWEI Mate 30',
      },
      {
        category: 'HUAWEI',
        price: '￥4000',
        name: 'HUAWEI nova 7',
      },
    ],
  };

  render() {
    return (
      <ul>
        <h1>Store</h1>
        {this.state.products.map((item, index) => (
          <Item key={index + 1} value={item} />
        ))}
      </ul>
    );
  }
}

export default Store;
