import { useState, useEffect } from 'react';
import Carousel from '../../Carousel';

const Dinner = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('OurProducts.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Carousel products={products} />
    </>
  );
};

export default Dinner;
