import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { uiActions } from '../../store/ui-slice';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Products = (props) => {
  // const [totalProducts, setTotalProducts] = useState([]);
  // useEffect(() => {
  //   fetch('https://react-http-c332b-default-rtdb.firebaseio.com/products.json')
  //   .then(response => response.json())
  //   .then(data => setTotalProducts(data));
  // }, []);
  const { products, isProductloading } = useSelector((state) => state.cart);
  return (
    <section className={classes.products}>
      {
        isProductloading && <p className={classes.loading}>Loading...</p>
      }
      {
        products.length > 0 &&
        <React.Fragment>
        <h2>Buy your favorite products</h2>
        <ul>
          {products.map((product) => (
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
