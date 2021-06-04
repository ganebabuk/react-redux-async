import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { uiActions } from '../../store/ui-slice';
import React, { useState, useEffect } from 'react';

const Products = (props) => {
  const [totalProducts, setTotalProducts] = useState([]);
  useEffect(() => {
    fetch('https://react-http-c332b-default-rtdb.firebaseio.com/products.json')
    .then(response => response.json())
    .then(data => setTotalProducts(data));
  }, []);
  return (
    <section className={classes.products}>
      {
        totalProducts.length === 0 && <h2>Loading...</h2>
      }
      {
        totalProducts.length > 0 &&
        <React.Fragment>
        <h2>Buy your favorite products</h2>
        <ul>
          {totalProducts.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </ul>
        </React.Fragment>
      }
    </section>
  );
};

export default Products;
